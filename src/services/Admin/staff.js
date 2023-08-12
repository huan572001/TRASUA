import { STAFF_API_PATH, USER_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const StaffAPI = {
  getAllStaff: async (params) => {
    const url = `/${STAFF_API_PATH}/find-acount?search=${params?.search}&page=${params?.page}&limit=${params?.amount}&isAcctive=`;
    return axiosClient.get(url);
  },
  createStaff: async (params) => {
    const url = `/${USER_API_PATH}/register-staff`;
    return axiosClient.post(url, params);
  },
  editStaff: async (params) => {
    console.log(params);
    const url = `/${STAFF_API_PATH}/edit-acount`;
    return axiosClient.put(url, params);
  },
  deleteStaff: async (data) => {
    const url = `/${STAFF_API_PATH}/delete-acount/${data}`;
    return axiosClient.delete(url);
  },
  lockStaff: async (id) => {
    const url = `/${STAFF_API_PATH}/lock-account`;
    return axiosClient.put(url, { id: id });
  },
  unlLockStaff: async (id) => {
    const url = `/${STAFF_API_PATH}/unlock-account`;
    return axiosClient.put(url, { id: id });
  },
  getAllRole: async () => {
    const url = `/${STAFF_API_PATH}/all-role`;
    return axiosClient.get(url);
  },
  getProfile: async (id) => {
    const url = `/${STAFF_API_PATH}/view-profile/${id}`;
    return axiosClient.get(url);
  },
  editStaff: async (id, data) => {
    const url = `/${STAFF_API_PATH}/edit-myif-staff/${id}`;
    return axiosClient.put(url, data);
  },
  getAllingredientOrderByStaffId: async (id) => {
    const url = `/${STAFF_API_PATH}/all-ingredient-staff/${id}`;
    return axiosClient.get(url);
  },
  getAllOrderByStaffId: async (id) => {
    const url = `/${STAFF_API_PATH}/all-order-staff/${id}`;
    return axiosClient.get(url);
  },
};
