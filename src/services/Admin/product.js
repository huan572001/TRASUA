import { STAFF_API_PATH } from '@/constant/api';
import axiosClient from '../axiosClient';

export const ProductAPI = {
  deleteProduct: async (id) => {
    const url = `/${STAFF_API_PATH}/delete/${id}`;
    return axiosClient.delete(url);
  },
  editProduct: async (id, data) => {
    const url = `/${ADMIN_API_PATH}/edit-product/${id}`;
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
};
