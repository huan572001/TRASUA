import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const StaffAPI = {
  getAllStaff: async (params) => {
    const url = `/${STAFF_API_PATH}/find-acount?search=${params?.search}&page=${params?.page}&limit=${params?.amount}`;
    return axiosClient.get(url);
  },
  editStaff: async (params) => {
    const url = `/${STAFF_API_PATH}/edit-acount`;
    return axiosClient.get(url);
  },
  deleteStaff: async (data) => {
    const url = `/${STAFF_API_PATH}/delete-acount/${id}`;
    return axiosClient.delete(url, data);
  },
  lockStaff: async (id) => {
    const url = `/${STAFF_API_PATH}/lock-account`;
    return axiosClient.put(url, { id: id });
  },
  unlLockStaff: async (id) => {
    const url = `/${STAFF_API_PATH}/unlock-account`;
    return axiosClient.put(url, { id: id });
  },
};
