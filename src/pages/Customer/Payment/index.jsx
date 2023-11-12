import { product } from "@/assets";
import { useState } from "react";
import {
  informSucess,
  showConfirmError,
  showConfirmSuccess,
  showError,
} from "@/components/AccountModal/Modal";
import routerLinks from "@/utils/router-links";
import { Button, Col, Form, Input, Radio, Row } from "antd";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { CustomerAPI } from "@/services/Customer";
import { values } from "lodash";

const Payment = () => {
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(1);
  const total = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();
  const VnPay = async (data) => {
    try {
      const req = await CustomerAPI.VnPay({ ...data, prize: total.state });
      if (req?.success) {
        window.open(req.data, "_self");
      }
    } catch (error) {
      showError();
    }
  };

  const onFinish = async (values) => {
    let input = { ...values };
    let listProduct = [];
    listProduct = JSON.parse(
      localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]"
    );
    let data = [];
    console.log(listProduct);
    listProduct.forEach((e) => {
      data.push({
        idCus: auth?.user?.data?.id,
        idPro: e?.id,
        qty: e?.sl,
        price: e?.price,
        capital_price: e?.capital_price,
      });
    });
    input = { ...input, data };
    if (values?.pay) {
      try {
        const req = await CustomerAPI.checkOut(input);

        if (req?.success) {
          buy();
        }
      } catch (error) {
        showError();
      }
    } else {
      VnPay(input);
    }
  };
  const buy = () => {
    localStorage.removeItem("cart");
    navigate("/");
    informSucess();
  };
  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          address: auth?.user?.data?.address,
        }}
      >
        <Row className="myRow">
          <Col span={20}>
            <Form.Item
              style={{ marginRight: "24px" }}
              label="Địa chỉ nhận hàng"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input disabled={open} />
            </Form.Item>
          </Col>
          <Col span={4}>
            {open ? (
              <Button onClick={() => setOpen(false)}>Chỉnh sửa</Button>
            ) : (
              <Button onClick={() => setOpen(true)}>OK</Button>
            )}
          </Col>
        </Row>
        <Form.Item
          style={{ marginRight: "24px" }}
          label="Phương thức thánh toán:"
          name="pay"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Thanh toán khi nhận hàng</Radio>
            <Radio value={false}>Thanh Toan VNPay</Radio>
          </Radio.Group>
        </Form.Item>

        <Row>
          <Col span={12}>Tổng tiền: </Col>
          <Col span={12} style={{ color: "red" }}>
            {total?.state} VND
          </Col>
        </Row>

        <Button htmlType="submit">Đặt hàng</Button>
      </Form>
    </>
  );
};
export default Payment;
