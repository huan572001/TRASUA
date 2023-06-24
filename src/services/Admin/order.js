import { STAFF_API_PATH } from '@/constant/api';
import axiosClient from '../axiosClient';

export const OrderAPI = {
  getAllOrder: async () => {
    const url = `/${STAFF_API_PATH}/all-order`;
    return axiosClient.get(url);
  },
  cancelOrder: async (id, data) => {
    const url = `/${STAFF_API_PATH}/cancle-order/${id}`;
    return axiosClient.put(url, data);
  },
  confirmOrder: async (id, data) => {
    const url = `/${STAFF_API_PATH}/accept-order/${id}`;
    return axiosClient.put(url, data);
  },
  getOrderById: async (id) => {
    const url = `/${STAFF_API_PATH}/orderById/${id}`;
    return axiosClient.get(url);
  },
};
