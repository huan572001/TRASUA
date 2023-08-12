import axiosClient from "../axiosClient";

export const notAuthAPI = {
  register: async (data) => {
    const url = `/auth/register`;
    return axiosClient.post(url, data);
  },
  getAllProduct: async (data) => {
    const url = `/until/getAllProduct?search=${data.search}&page=${data.page}&limit=${data.amount}`;
    return axiosClient.get(url);
  },
  getAllRateProductById: async (data) => {
    const url = `until/danhgia/${data}`;
    return axiosClient.get(url);
  },
};
