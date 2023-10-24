import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const ProductAPI = {
  getAllProduct: async (params) => {
    const url = `until/getAllProduct?search=${params?.search}&page=${params?.page}&limit=${params?.amount}&activate=`;
    return axiosClient.get(url);
  },
  deleteProduct: async (id) => {
    const url = `/${STAFF_API_PATH}/delete/${id}`;
    return axiosClient.delete(url);
  },
  editProduct: async (id, data) => {
    const url = `/${STAFF_API_PATH}/edit/${id}`;
    return axiosClient.put(url, data);
  },
  editRecipe: async (id, data) => {
    const url = `/product/recipre-update/${id}`;
    return axiosClient.put(url, data);
  },
  createProduct: async (data) => {
    const url = `/${STAFF_API_PATH}/create`;
    return axiosClient.post(url, data);
  },
  getProductById: async (id) => {
    const url = `/product/recipre/${id}`;
    return axiosClient.get(url);
  },
  getRecipreById: async (id) => {
    const url = `/product/recipre/${id}`;
    return axiosClient.get(url);
  },
  lock: async (id) => {
    const url = `/${STAFF_API_PATH}/lock-product/${id}`;
    return axiosClient.put(url);
  },
  unlLock: async (id) => {
    const url = `/${STAFF_API_PATH}/un-lock-product/${id}`;
    return axiosClient.put(url);
  },
  getPriceRecipe: async (data) => {
    const url = `/product/getPriceRecipe`;
    return axiosClient.post(url, data);
  },
};
