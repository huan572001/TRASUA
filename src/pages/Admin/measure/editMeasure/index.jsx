import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { keyUser } from "@/constant/auth";
import { MeasureAPI } from "@/services/Admin/measure";
import { Button, Card, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { useEffect, useState } from "react";
// import CardIngredient from "../Ingredient_order/CardIngredientOrder";
const EditMeasure = () => {
  //   const [listVT, setListVT] = useState([]);
  //   const auth = JSON.parse(localStorage.getItem(keyUser));
  const data = useLocation();
  console.log(data?.state?.id);
  const navigate = useNavigate();
  useEffect(() => {
    try {
    } catch (error) {}
  }, []);
  const onFinish = async (value) => {
    try {
      const req = await MeasureAPI.EditMeasure(data?.state?.id, value);
      if (req?.success) {
        navigate(routerLinks("Measure"));
        showConfirmSuccess();
      }
    } catch (error) {
      showError();
    }
  };
  return (
    <>
      <h1>Chỉnh sửa tên đơn vị vật tư :</h1>

      <Form
        name="edit"
        initialValues={{
          name: data?.state?.name,
        }}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên đơn vị vật tư:"
          name="name"
          rules={[
            {
              required: true,
              message: "Không thể bỏ trống tên đơn vị vật tư!",
            },
          ]}
        >
          <Input type="string" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            style={{ backgroundColor: "#c00", borderColor: "#c00" }}
            type="primary"
            htmlType="submit"
          >
            Lưu
          </Button>

          <Button
            style={{ backgroundColor: "#c00", borderColor: "#c00" }}
            type="primary"
            htmlType="submit"
            onClick={() => {
              navigate(routerLinks("Measure"));
            }}
          >
            Hủy
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditMeasure;
