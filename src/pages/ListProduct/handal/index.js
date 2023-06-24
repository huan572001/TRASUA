import {
  showConfirmError,
  showConfirmSuccess,
} from '@/components/AccountModal/Modal';
import { IngrediantAPI } from '@/services/Admin/Ingredient';
import { ProductAPI } from '@/services/Admin/product';

export const deleteProduct = async (id) => {
  try {
    const a = await ProductAPI.deleteProduct(id);
    if (a?.success) {
      showConfirmSuccess();
    } else {
      showConfirmError();
    }
  } catch (error) {
    showConfirmError();
  }
};
export const createProduct = async (data) => {
  try {
    const a = await ProductAPI.createProduct(data);
    if (a?.success) {
      showConfirmSuccess();
    } else {
      showConfirmError();
    }
  } catch (error) {
    showConfirmError();
  }
};
export const editProduct = async (id, data) => {
  try {
    const a = await ProductAPI.editProduct(id, data);
    if (a) {
      showConfirmSuccess();
    } else {
      showConfirmError();
    }
  } catch (error) {
    showConfirmError();
  }
};
export const getAllIngredient = async (setData) => {
  try {
    const a = await IngrediantAPI.getAllIngredient();
    if (a?.success) {
      setData(a.data);
    }
  } catch (error) {}
};
