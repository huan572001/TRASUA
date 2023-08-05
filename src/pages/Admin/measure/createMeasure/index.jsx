import { Button, Form, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { MeasureAPI } from "@/services/Admin/measure";
import {
  showConfirmError,
  showConfirmSuccess,
  showError,
} from "@/components/AccountModal/Modal";
const createMeasure = () => {
  const navigate = useNavigate();
  const onChange = async (value) => {
    console.log(value);
    try {
      const respone = await MeasureAPI.CreateMeasure(value);
      if (respone?.success === true) {
        showConfirmSuccess();
        navigate(routerLinks("Measure"));
      } else {
        showError("Tao khong thanh cong");
      }
    } catch (error) {
      showError();
    }
  };

  return (
    <>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Thêm nhân viên
      </h1>
      <Form onFinish={onChange}>
        <Form.Item
          name="name"
          rules={[{ required: true, whitespace: true }, { max: 150 }]}
          label="Ten don vi vat tu"
        >
          <Input placeholder="ten vat tu" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Tạo</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default createMeasure;
