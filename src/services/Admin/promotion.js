import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const PromosionAPI = {
  getAllPromosionNow: async () => {
    const url = `/${STAFF_API_PATH}/all-promotion`;
    return axiosClient.get(url);
  },
  getAllPromosionEnd: async () => {
    const url = `/${STAFF_API_PATH}/all-promotion-end`;
    return axiosClient.get(url);
  },
  getAllPromosionHave: async () => {
    const url = `/${STAFF_API_PATH}/all-promotion-register`;
    return axiosClient.get(url);
  },
  deletePromotion: async (id) => {
    const url = `/${STAFF_API_PATH}/delete-promotion/${id}`;
    return axiosClient.delete(url);
  },
  createPromotion: async (data) => {
    const url = `/${STAFF_API_PATH}/create-promotion`;
    return axiosClient.post(url, data);
  },
};
