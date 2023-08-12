import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const UserAPI = {
  getUser: async (params) => {
    const url = `/${STAFF_API_PATH}/find-acount-customer?search=${params?.search}&page=${params?.page}&limit=${params?.amount}&isAcctive=`;
    return axiosClient.get(url);
  },
  lock: async (id) => {
    const url = `/${STAFF_API_PATH}/lock-account-customer`;
    return axiosClient.put(url, { id: id });
  },
  unlLock: async (id) => {
    const url = `/${STAFF_API_PATH}/unlock-account-customer`;
    return axiosClient.put(url, { id: id });
  },
};
