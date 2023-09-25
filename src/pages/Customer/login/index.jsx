import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router";
import routerLinks from "@/utils/router-links";
import "./index.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { CustomerAPI } from "@/services/Customer";
import { useAuth } from "@/context/AuthProvider";
import { showError } from "@/components/AccountModal/Modal";
const LoginCustomer = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await CustomerAPI.loginCustomer(values);
      if (res?.success) {
        const data = {
          token: res?.token,
          data: res?.data,
        };
        auth.login(data);
        navigate("/", { replace: true });
      } else {
        showError(res?.mgs);
      }
    } catch (err) {
      showError();
    }
  };
  return (
    <>
      <div className="login">
        <div className="signup">
          <div className="signup-connect">
            <img
              alt="logo"
              src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/639d4fb26949fb0d309d5aba_logo-phuc-long-coffee-and-tea.jpg"
            />
            <span>Cửa hàng Phúc Long</span>
          </div>
          <div className="signup-classic">
            <h2>Welcome, Honored guests</h2>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone!",
                  },
                  {
                    pattern: /^[0-9]{9,11}$/, // Điều kiện: 10-11 chữ số
                    message: "Invalid phone number!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Phone"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <div
                  onClick={() => navigate(routerLinks("ForgotPassWord"))}
                  className="login-form-forgot"
                >
                  Forgot password
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Login
                </Button>
                Or{" "}
                <div onClick={() => navigate(routerLinks("Register"))}>
                  {/* Register now! */}
                  <a className="login-form-forgot">Register now!</a>
                </div>
              </Form.Item>
              <div onClick={() => navigate(routerLinks("Login"))}>
                {/* Staff click here */}
                <a className="login-form-forgot"> Staff click here</a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginCustomer;
