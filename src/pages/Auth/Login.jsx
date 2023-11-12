import Vite from "@/assets/logo.png";
import { loginError } from "@/components/AccountModal/Modal";
import { useAuth } from "@/context/AuthProvider";
import { AuthService } from "@/services";
import { Button, Checkbox, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";
import {
  VALIDATION_PASSWORD_E002,
  VALIDATION_PHONE_E002,
  VALIDATION_required_E001,
} from "@/constant/validate";
import routerLinks from "@/utils/router-links";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onFinished = async (values) => {
    if (!values) return;
    try {
      const res = await AuthService.login(values);
      if (res?.success) {
        const data = {
          token: res?.token,
          data: res?.data,
        };

        auth.login(data);
        navigate("/Admin");
      } else {
        loginError(res.msg);
      }
    } catch (err) {
      loginError();
      console.log(err);
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
            <h2>Management system</h2>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinished}
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: VALIDATION_required_E001,
                  },
                  {
                    pattern: /^[0-9]{9,11}$/, // Điều kiện: 10-11 chữ số
                    message: VALIDATION_PHONE_E002,
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
              </Form.Item>
              <div onClick={() => navigate(routerLinks("LoginCustomer"))}>
                {/* Staff click here */}
                <a className="login-form-forgot"> User click here</a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <Fragment>
  //     <div
  //       style={{
  //         height: "100vh",
  //         width: "100vw",
  //         overflowY: "hidden",
  //         backgroundColor: "#f8f8f8",
  //       }}
  //     >
  //       <div className="form-Login">
  //         <div className="logo">
  //           <img
  //             alt="logo"
  //             src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/639d4fb26949fb0d309d5aba_logo-phuc-long-coffee-and-tea.jpg"
  //           />
  //           <span>Cửa hàng Phúc Long</span>
  //         </div>
  //         <Form onFinish={onFinished}>
  //           <FormItem
  //             name="phone"
  //             rules={[
  //               { required: true },
  //               {
  //                 pattern: /^[0-9]{9,11}$/, // Điều kiện: 10-11 chữ số
  //                 message: "Invalid phone number!",
  //               },
  //             ]}
  //             hasFeedback
  //           >
  //             <Input placeholder={`Phone`} />
  //           </FormItem>

  //           <FormItem name="password" rules={[{ required: true }]} hasFeedback>
  //             <Input placeholder="password" type="password" required />
  //           </FormItem>
  //           <Row>
  //             <Button type="primary" htmlType="submit">
  //               Sign in
  //             </Button>
  //           </Row>
  //         </Form>
  //       </div>
  //     </div>
  //   </Fragment>
  // );
};

export default Login;
