import {
  showConfirmError,
  showConfirmSuccess,
} from '@/components/AccountModal/Modal';
import { OrderAPI } from '@/services/Admin/order';

export const getOrdered = async (getdata, status) => {
  try {
    const a = await OrderAPI.getAllOrder();
    getdata(a?.data.filter((e) => e.status === status));
  } catch (error) {}
};
export const confirmOrder = async (id, data) => {
  try {
    const a = await OrderAPI.confirmOrder(id, data);
    if (a) {
      showConfirmSuccess();
      return true;
    }
  } catch (error) {
    showError();
  }
};
export const cancelOrder = async (id, data) => {
  try {
    const a = await OrderAPI.cancelOrder(id, data);
    if (a) {
      showConfirmSuccess();
      return true;
    }
  } catch (error) {
    showError();
  }
};
