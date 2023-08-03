import axiosClient from "../axiosClient";

export const notAuthAPI = {
  register: async (data) => {
    const url = `/auth/register`;
    return axiosClient.post(url, data);
  },
  getAllProduct: async () => {
    const url = `/product/all`;
    return axiosClient.get(url);
  },
  getAllRateProductById: async (data) => {
    const url = `until/danhgia/${data}`;
    return axiosClient.get(url);
  },
};
