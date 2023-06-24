import axios from 'axios';
import { keyToken, keyUser } from '@/constant/auth';
import { useNavigate } from 'react-router-dom';

const axiosClient = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL +
    import.meta.env.VITE_REACT_APP_API_VERSION,
  headers: {
    'Content-Type': 'application/json',
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(keyToken);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    if (
      error?.response?.data?.error === 'jwt expired' ||
      error?.response?.data?.error === 'invalid signature'
    ) {
      const pattern = /auth/;
      if (!pattern.test(window.location.pathname)) {
        swal({
          title: `Thất bại`,
          text: `Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.`,
          icon: 'warning',
          button: 'Đăng nhập',
        }).then(() => {
          localStorage.clear();
          window.location.reload();
        });
      } else {
        localStorage.clear();
        window.location.reload();
      }
    }
    throw error;
  }
);

export default axiosClient;
