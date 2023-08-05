import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "@/services/axiosClient";

export const MeaseumAPI = {
  getAllMeaseum: async () => {
    const url = `/${STAFF_API_PATH}/all-measure`;
    return axiosClient.get(url);
  },
};
