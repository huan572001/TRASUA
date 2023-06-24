import { CUSTOMER_API_PATH, USER_API_PATH } from '@/constant/api';
import axiosClient from '../axiosClient';

export const CustomerAPI = {
  loginCustomer: async (data) => {
    const url = `/${USER_API_PATH}/login-customer`;
    return axiosClient.post(url, data);
  },
  checkOut: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/checkOut`;
    return axiosClient.post(url, data);
  },
};
