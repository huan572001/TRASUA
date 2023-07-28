import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router";
import routerLinks from "@/utils/router-links";
import "./index.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { CustomerAPI } from "@/services/Customer";
import { useAuth } from "@/context/AuthProvider";
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
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="login">
        <div className="signup">
          <div className="signup-connect">
            <h1>Login</h1>
          </div>
          <div className="signup-classic">
            <h2>welcome, honored guests</h2>
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

                <a className="login-form-forgot">Forgot password</a>
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
                  register now!
                </div>
              </Form.Item>
              <div onClick={() => navigate(routerLinks("Login"))}>
                Staff click here
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginCustomer;
