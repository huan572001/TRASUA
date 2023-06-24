import axiosClient from '../axiosClient';

export const notAuthAPI = {
  getAllProduct: async () => {
    const url = `/product/all`;
    return axiosClient.get(url);
  },
};
