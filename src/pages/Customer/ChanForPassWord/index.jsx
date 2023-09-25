import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { notAuthAPI } from "@/services/notAuth";
import { Button, Form, Input } from "antd";
import { useState } from "react";

const ChangePassWord = () => {
  const [state, setState] = useState(0);
  const onFinish = (value) => {
    try {
      const rq = notAuthAPI.sendMail(value);
      if (rq?.success) {
        showSuccess("Gửi mail thành công");
        setState(1);
      } else {
        showError("Tài khoản không tồn tại");
      }
    } catch (error) {
      showError("Tài khoản không tồn tại");
    }
  };
  const onVeryfiOTP = (value) => {
    try {
      const rq = notAuthAPI.sendMail(value);
      if (rq?.success) {
        setState(2);
        showSuccess("OTP chính xác hãy thay đổi mật khẩu cảu bạn");
      } else {
        showError("OTP sai");
      }
    } catch (error) {
      showError("OTP sai");
    }
  };
  return (
    <>
      <div className="login ">
        <div className="signup h-[500px]">
          <div className="signup-connect">
            <img
              alt="logo"
              src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/639d4fb26949fb0d309d5aba_logo-phuc-long-coffee-and-tea.jpg"
            />
            <span>Cửa hàng Phúc Long</span>
          </div>
          <div className="signup-classic">
            <div>Quên mật khẩu</div>
            <div
              style={{
                display: state === 0 ? "" : "none",
              }}
            >
              <Form onFinish={onFinish}>
                <Form.Item
                  name={"email"}
                  rules={[
                    {
                      required: true,
                      message: "không được để trống!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">gửi</Button>
                </Form.Item>
              </Form>
            </div>
            <div
              style={{
                display: state === 1 ? "" : "none",
              }}
            >
              <div>Xác nhận OTP</div>
              <Form onFinish={onVeryfiOTP}>
                <Form.Item
                  name={"OTP"}
                  rules={[
                    {
                      required: true,
                      message: "không được để trống!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" />
                </Form.Item>
              </Form>
              <Button onClick={() => setState(0)}>back</Button>
            </div>
            <div
              style={{
                display: state === 2 ? "" : "none",
              }}
            >
              <div>Đổi mật khẩu</div>
              <Form onFinish={onVeryfiOTP}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "không được để trống!",
                    },
                  ]}
                >
                  <Input type="password" />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" />
                </Form.Item>
              </Form>
              <Button onClick={() => setState(0)}>back</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassWord;
