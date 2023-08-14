import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const StatiscalAPI = {
  statisticalProduct: async (data) => {
    const url = `/${STAFF_API_PATH}/statistical-revenue-date`;
    return axiosClient.post(url, data?.search);
  },
  statisticalShipper: async () => {
    const url = `/${STAFF_API_PATH}/statistical-shipper`;
    return axiosClient.get(url);
  },
  customerTop: async () => {
    const url = `/${STAFF_API_PATH}/customer-top`;
    return axiosClient.get(url);
  },
};
