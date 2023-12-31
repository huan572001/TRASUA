import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const IngrediantAPI = {
  getAllIngredient: async () => {
    const url = `/${STAFF_API_PATH}/all-ingredient`;
    return axiosClient.get(url);
  },
  getAllIngredientOrder: async () => {
    const url = `/${STAFF_API_PATH}/all-order_item`;
    return axiosClient.get(url);
  },
  getAllIngredientOrderById: async (id) => {
    const url = `/${STAFF_API_PATH}/all-i_order_i/${id}`;
    return axiosClient.get(url);
  },
  addIngredientOrder: async (data) => {
    const url = `/${STAFF_API_PATH}/import-ingredient`;
    return axiosClient.post(url, data);
  },
  crateIngredient: async (data) => {
    const url = `/${STAFF_API_PATH}/create-ingredient`;
    return axiosClient.post(url, data);
  },
  editIngredient: async (data) => {
    const url = `/${STAFF_API_PATH}/edit-ingredient`;
    return axiosClient.put(url, data);
  },
  deleteIngredient: async (data) => {
    const url = `/${STAFF_API_PATH}/delete-ingredient/${data}`;
    return axiosClient.delete(url);
  },
  lockOrder: async (data) => {
    const url = `/${STAFF_API_PATH}/cancel-import-ingredient/${data}`;
    return axiosClient.put(url);
  },
  unLockOrder: async (data) => {
    const url = `/${STAFF_API_PATH}/uncancel-import-ingredient/${data}`;
    return axiosClient.put(url);
  },
};
