import axios from 'axios'

export const api = axios.create({
    baseUrl: `${import.meta.env.VITE_APP_BACKEND}`,
    withCredientials: true,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ecom-kit");

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
  (response) => {
    // Optional: log response
    console.log("Response:", response);

    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Example: handle 401 (Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        const newToken = res.data.accessToken;

        // store new token
        localStorage.setItem("ecom-kit", newToken);

        // retry original request
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // logout logic
        console.log("Session expired");
        localStorage.removeItem("access_token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);