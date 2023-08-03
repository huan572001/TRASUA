import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { keyUser } from "@/constant/auth";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { Button, Card, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import CardIngredient from "./CardIngredientOrder";
const FormIngredient = () => {
  const [listVT, setListVT] = useState([]);
  const navigate = useNavigate();
  const onFinish = async () => {
    if (listVT.length > 0) {
    } else {
      showError();
    }
    // let data = {
    //   price: Number(value?.price),
    //   quantity: Number(value?.quantity),
    //   ingredient_id: info?.state?.id,
    //   staff_id: auth?.data?.id,
    // };
    // try {
    //   const req = await IngrediantAPI.addIngredientOrder(data);
    //   if (req?.success) {
    //     navigate(routerLinks("Ingredient"));
    //     showConfirmSuccess();
    //   }
    // } catch (error) {
    //   showError();
    // }
  };
  const deleteVT = (index) => {
    let tmp = [...listVT];
    tmp.splice(index, 1);
    setListVT(tmp);
  };
  return (
    <Card title="Tạo hóa đơn vật tư">
      <h1>Thêm vât tư</h1>
      <CardIngredient setData={setListVT} />
      <h1>Danh sách vật tư</h1>
      {listVT?.map((e, index) => {
        return (
          <Card key={index}>
            <div className="flex justify-between">
              <div>Tên sản phẩm: {e?.name}</div>
              <div>Đơn vị tính: {e?.measure_id}</div>
              <div>Số lượng: {e?.quantity}</div>
              <div>Giá: {e?.price}</div>
              <div className="text-red-600" onClick={() => deleteVT(index)}>
                Xóa
              </div>
            </div>
          </Card>
        );
      })}
      <div className="flex justify-center">
        <Button onClick={() => onFinish()}>Tạo hóa đơn</Button>
      </div>
    </Card>
  );
};
export default FormIngredient;
