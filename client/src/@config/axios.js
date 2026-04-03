import axios from 'axios'

export const api = axios.create({
    baseUrl: `${import.meta.env.VITE_APP_BACKEND}`,
    withCredientials: true,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request:", config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // prevent infinite loop
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    // 🔒 If refresh already happening → queue request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          },
          reject: (err) => reject(err),
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      // ⚠️ use clean axios instance (no interceptors)
      const res = await axios.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );

      const newToken = res.data.accessToken;

      localStorage.setItem("access_token", newToken);

      // update default headers
      api.defaults.headers.Authorization = `Bearer ${newToken}`;

      processQueue(null, newToken);

      // retry original request
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);

    } catch (err) {
      processQueue(err, null);

      localStorage.removeItem("access_token");
      window.location.href = "/login";

      return Promise.reject(err);

    } finally {
      isRefreshing = false;
    }
  }
);

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};