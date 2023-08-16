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
        showError("Tạo không thành công");
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
        Thêm đơn vị vật tư
      </h1>
      <Form onFinish={onChange}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Không thể để trống tên vật tư",
            },
            { max: 150 },
          ]}
          label="Tên đơn vị vật tư"
        >
          <Input placeholder="tên vật tư" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Tạo</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default createMeasure;
