import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { CustomerAPI } from "@/services/Customer";
import { Button, Form, Input } from "antd";

const ChangeForPassWord = ({ id, setpassWord }) => {
  const changeForPassWord = async (value) => {
    try {
      const rq = await CustomerAPI.changeForPassWord(id, value);
      if (rq?.success) {
        showSuccess("Đổi mật khẩu thành công");
        setpassWord(true);
      } else {
        showError(rq?.msg);
      }
    } catch (error) {
      showError();
    }
  };
  return (
    <>
      <Form onFinish={changeForPassWord}>
        <Form.Item
          label={"Mật khẩu cũ"}
          name={"passwordOld"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 40, message: "chiều dài không vượt quá 40" },
            { min: 6, message: "chiều dài không nhỏ hơn 6" },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label={"Mật khẩu mới"}
          name={"passwordNew"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 40, message: "chiều dài không vượt quá 40" },
            { min: 6, message: "chiều dài không nhỏ hơn 6" },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label={"Xác nhận mật khẩu mới"}
          name={"passwordConfirm"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 40, message: "chiều dài không vượt quá 40" },
            { min: 6, message: "chiều dài không nhỏ hơn 6" },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Xác nhận</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ChangeForPassWord;
