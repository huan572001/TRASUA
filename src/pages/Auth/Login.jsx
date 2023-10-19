import Vite from "@/assets/logo.png";
import { loginError } from "@/components/AccountModal/Modal";
import { useAuth } from "@/context/AuthProvider";
import { AuthService } from "@/services";
import { Button, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";

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
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div className="form-Login">
          <div className="logo">
            <img
              alt="logo"
              src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/639d4fb26949fb0d309d5aba_logo-phuc-long-coffee-and-tea.jpg"
            />
            <span>Cửa hàng Phúc Long</span>
          </div>
          <Form onFinish={onFinished}>
            <FormItem
              name="phone"
              rules={[
                { required: true },
                {
                  pattern: /^[0-9]{9,11}$/, // Điều kiện: 10-11 chữ số
                  message: "Invalid phone number!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder={`Phone`} />
            </FormItem>

            <FormItem name="password" rules={[{ required: true }]} hasFeedback>
              <Input placeholder="password" type="password" required />
            </FormItem>
            <Row>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
