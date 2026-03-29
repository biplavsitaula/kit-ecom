import { api } from "../@config/axios";

const handleError = (error) => {
  return Promise.reject(
    error?.response?.data || { message: "Something went wrong" }
  );
};

export const apiServices = {
  getCall: async (url, config = {}) => {
    try {
      const res = await api.get(url, config);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  postCall: async (url, data, config = {}) => {
    try {
      const res = await api.post(url, data, config);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  updateCall: async (url, data, config = {}) => {
    try {
      const res = await api.patch(url, data, config);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  deleteCall: async (url, config = {}) => {
    try {
      const res = await api.delete(url, config);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};