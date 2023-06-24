import { STAFF_API_PATH } from '@/constant/api';
import axiosClient from '../axiosClient';

export const StatiscalAPI = {
  statisticalProduct: async () => {
    const url = `/${STAFF_API_PATH}/statistical`;
    return axiosClient.get(url);
  },
  statisticalShipper: async () => {
    const url = `/${STAFF_API_PATH}/statistical-shipper`;
    return axiosClient.get(url);
  },
  revenue: async () => {
    const url = `/${STAFF_API_PATH}/statistical-revenue`;
    return axiosClient.get(url);
  },
};
