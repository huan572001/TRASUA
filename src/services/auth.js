import { USER_API_PATH } from '@/constant/api';
import axiosClient from './axiosClient';

export async function login(data) {
  const url = `/${USER_API_PATH}/login-staff`;
  return axiosClient.post(url, data);
}
