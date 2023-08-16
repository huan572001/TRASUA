import { Button, Checkbox, DatePicker, Form, Input, Radio, Select } from "antd";

import { useNavigate } from "react-router";
import routerLinks from "@/utils/router-links";
import "./index.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { notAuthAPI } from "@/services/notAuth";
import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
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
                    message: "Không được để trống",
                  },
                  {
                    type: "email",
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
                    message: "Không được để trống!",
                  },
                  {
                    min: 6,
                    max: 12,
                    message: "min: 6 max: 12,",
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
                    message: "Không được để trống!",
                  },
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
                    message: "Không được để trống!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="phone"
                  placeholder="Số điện thoại"
                />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Không được để trống!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Địa chỉ"
                />
              </Form.Item>
              {/* <Form.Item name="gender" label="Giới tính">
                <Radio.Group>
                  <Radio value="1">Nam</Radio>
                  <Radio value="0">Nữ</Radio>
                </Radio.Group>
              </Form.Item> */}
              {/* <Form.Item name="birthday" label="DatePicker">
                <DatePicker />
              </Form.Item> */}
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
                  <a className="login-form-forgot"> Login now!</a>
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
