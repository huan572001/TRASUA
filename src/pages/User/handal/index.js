// import {
//   showConfirmError,
//   showConfirmSuccess,
// } from '@/components/AccountModal/Modal';
// import { UserAPI } from '@/services/Admin/user';

// export const getUser = async (setData) => {
//   try {
//     const a = await UserAPI.getUser();
//     if (a?.success) {
//       setData(a?.data);
//     }
//   } catch (error) {}
// };
// export const editUser = async (id, data) => {
//   try {
//     const a = await UserAPI.editUser(id, data);
//     if (a?.success) {
//       showConfirmSuccess();
//     } else {
//       showConfirmError();
//     }
//   } catch (error) {
//     showConfirmError();
//   }
// };
// export const getOrderByUser = async (getdata, id) => {
//   try {
//     const a = await UserAPI.getOrderByUser(id);
//     getdata(a?.send_data);
//   } catch (error) {
//     showConfirmError();
//   }
// };
// export const getProductByOrder = async (getdata, id) => {
//   try {
//     const a = await UserAPI.getProductByOrder(id);
//     getdata(a?.send_data);
//   } catch (error) {
//     showConfirmError();
//   }
// };
