import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "../axiosClient";

export const MeasureAPI = {
  getAllMeasure: async () => {
    const url = `/${STAFF_API_PATH}/all-measure`;
    return axiosClient.get(url);
  },
  CreateMeasure: async (data) => {
    const url = `/${STAFF_API_PATH}/create-measure`;
    return axiosClient.post(url, data);
  },
  EditMeasure: async (id, data) => {
    const url = `/${STAFF_API_PATH}/edit-measure/${id}`;
    return axiosClient.put(url, data);
  },
  deleteMeasure: async (id) => {
    const url = `/${STAFF_API_PATH}/delete-measure/${id}`;
    return axiosClient.delete(url);
  },
};
