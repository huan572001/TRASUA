import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const IngrediantAPI = {
  getAllIngredient: async () => {
    const url = `/${STAFF_API_PATH}/all-ingredient`;
    return axiosClient.get(url);
  },
  addIngredientOrder: async (data) => {
    const url = `/${STAFF_API_PATH}/create-ingre`;
    return axiosClient.post(url, data);
  },
};
