import {
  showConfirmError,
  showConfirmSuccess,
  showError,
  showSuccess,
} from "@/components/AccountModal/Modal";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { ProductAPI } from "@/services/Admin/product";

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

export const getAllIngredient = async (setData) => {
  try {
    const a = await IngrediantAPI.getAllIngredient();
    if (a?.success) {
      setData(a.data);
    }
  } catch (error) {}
};
