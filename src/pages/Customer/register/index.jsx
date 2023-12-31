import { Button, Checkbox, DatePicker, Form, Input, Radio, Select } from "antd";

import { useNavigate } from "react-router";
import routerLinks from "@/utils/router-links";
import "./index.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { notAuthAPI } from "@/services/notAuth";
import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import moment from "moment";
import {
  SIGNUP_ADDRESS_ERROR,
  SIGNUP_BIRTHDAY_ERROR,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_GENDER_ERROR,
  SIGNUP_NAME_ERROR,
  SIGNUP_PHONE_ERROR,
  VALIDATION_PASSWORD_E001,
  VALIDATION_PASSWORD_E002,
  VALIDATION_PHONE_E002,
  VALIDATION_required_E001,
} from "@/constant/validate";
const Register = () => {
  const navigate = useNavigate();
  const onFinish = (value) => {
    try {
      const rq = notAuthAPI.register(value);
      if (rq) {
        navigate(routerLinks("LoginCustomer"));
        showConfirmSuccess();
      } else {
        showError();
      }
    } catch (error) {
      showError();
    }
  };
  const disabledDate = (current) => {
    // Lấy thời gian hiện tại
    const today = moment();

    // Giới hạn chỉ được chọn từ ngày cách thời gian hiện tại 18 năm
    return current && current >= today.subtract(14, "years");
  };
  return (
    <>
      <div className="register">
        <div className="signup">
          <div className="signup-connect">
            <img
              alt="logo"
              src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/639d4fb26949fb0d309d5aba_logo-phuc-long-coffee-and-tea.jpg"
            />
            <span>Cửa hàng Phúc Long</span>
          </div>
          <div className="signup-classic">
            <h2>Chào mừng bạn đến với cửa hàng</h2>
            <Form className="login-form" onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: VALIDATION_required_E001,
                  },
                  {
                    whitespace: true,
                    message: "Không được để khoảng trắng!",
                  },
                  { max: 255, message: "chiều dài không vượt quá 255" },
                  {
                    type: "email",
                    message: SIGNUP_EMAIL_ERROR,
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: VALIDATION_required_E001,
                  },
                  {
                    min: 6,
                    max: 32,
                    message: VALIDATION_PASSWORD_E002,
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: SIGNUP_NAME_ERROR,
                  },
                  {
                    whitespace: true,
                    message: "Không được để khoảng trắng!",
                  },
                  { max: 255, message: "chiều dài không vượt quá 255" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Họ và tên"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: SIGNUP_PHONE_ERROR,
                  },

                  {
                    pattern: /^[0-9]{9,11}$/, // Điều kiện: 10-11 chữ số
                    message: VALIDATION_PHONE_E002,
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Số điện thoại"
                  type="number"
                />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: SIGNUP_ADDRESS_ERROR,
                  },
                  {
                    whitespace: true,
                    message: "Không được để khoảng trắng!",
                  },
                  { max: 255, message: "chiều dài không vượt quá 255" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Địa chỉ"
                />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Giới tính"
                rules={[
                  {
                    required: true,
                    message: SIGNUP_GENDER_ERROR,
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="1">Nam</Radio>
                  <Radio value="0">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="birthday"
                label="DatePicker"
                rules={[
                  {
                    required: true,
                    message: SIGNUP_BIRTHDAY_ERROR,
                  },
                ]}
              >
                <DatePicker disabledDate={disabledDate} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Register
                </Button>
                Or
                <div onClick={() => navigate(routerLinks("LoginCustomer"))}>
                  <a className="login-form-forgot"> Đã có tài khoản!</a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
