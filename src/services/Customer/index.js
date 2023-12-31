import { CUSTOMER_API_PATH, USER_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const CustomerAPI = {
  loginCustomer: async (data) => {
    const url = `/${USER_API_PATH}/login-customer`;
    return axiosClient.post(url, data);
  },
  checkOut: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/checkOut`;
    return axiosClient.post(url, data);
  },
  getAllOrder: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/AllOrder/${data}`;
    return axiosClient.get(url);
  },
  getAllOrderTrue: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/AllOrderT/${data}`;
    return axiosClient.get(url);
  },
  getAllOrderFalse: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/AllOrderF/${data}`;
    return axiosClient.get(url);
  },
  getAllOrderItemNotRate: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/allOrderItemNotRate/${data}`;
    return axiosClient.get(url);
  },
  getAllOrderItemDone: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/allOrderItemDone/${data}`;
    return axiosClient.get(url);
  },
  craeteEvaluateByUser: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/evaluate-customer`;
    return axiosClient.post(url, data);
  },
  editEvaluate: async (data, id) => {
    const url = `/${CUSTOMER_API_PATH}/evaluate-edit/${id}`;
    return axiosClient.put(url, data);
  },
  deleteOrder: async (id) => {
    const url = `/${CUSTOMER_API_PATH}/cancle-order/${id}`;
    return axiosClient.put(url);
  },
  getProfile: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/view-myif/${data}`;
    return axiosClient.get(url);
  },
  editProfile: async (data, id) => {
    const url = `/${CUSTOMER_API_PATH}/update-profile/${id}`;
    return axiosClient.put(url, data);
  },
  changeForPassWord: async (id, data) => {
    const url = `/${CUSTOMER_API_PATH}/change-password/${id}`;
    return axiosClient.put(url, data);
  },
  checkOrder: async (data) => {
    const url = `/${CUSTOMER_API_PATH}/check-order`;
    return axiosClient.post(url, { data: [...data] });
  },
  VnPay: async (input) => {
    console.log(input);
    const url = `/${CUSTOMER_API_PATH}/create_payment_url`;
    return axiosClient.post(url, input);
    // return axiosClient.post(url, { data: [...data] });
  },
};
