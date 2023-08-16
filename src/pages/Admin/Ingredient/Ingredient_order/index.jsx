import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { keyUser } from "@/constant/auth";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { Button, Card, Form, Input, Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { useEffect, useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import CardIngredient from "./CardIngredientOrder";
const FormIngredient = () => {
  const [listVT, setListVT] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ingredient, setIngredient] = useState([]);
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(keyUser));

  const getAllProduct = async () => {
    try {
      const rq = await IngrediantAPI.getAllIngredient();
      if (rq?.success) {
        setIngredient(rq?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const onFinish = async () => {
    setLoading(true);
    if (listVT.length > 0) {
    } else {
      showError();
    }
    let data = {
      staff_id: auth?.data?.id,
      data: listVT,
    };
    try {
      const req = await IngrediantAPI.addIngredientOrder(data);
      if (req?.success) {
        navigate(routerLinks("Ingredient"));
        showConfirmSuccess();
        setLoading(false);
      }
    } catch (error) {
      showError();
      setLoading(false);
    }
  };
  const deleteVT = (index) => {
    let tmp = [...listVT];
    tmp.splice(index, 1);
    setListVT(tmp);
  };
  console.log(listVT);
  return (
    <Spin spinning={loading}>
      <Card title="Tạo hóa đơn vật tư">
        <h1>Thêm vât tư</h1>
        <CardIngredient
          setData={setListVT}
          ingredient={ingredient}
          setIngredient={setIngredient}
        />
        <h1>Danh sách vật tư</h1>
        {listVT?.map((e, index) => {
          return (
            <Card key={index}>
              <div className="flex justify-between">
                <div>Tên sản phẩm: {e?.name}</div>
                <div>Đơn vị tính: {e?.measure_id}</div>
                <div>Số lượng: {e?.qty}</div>
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
    </Spin>
  );
};
export default FormIngredient;
