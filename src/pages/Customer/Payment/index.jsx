import { product } from '@/assets';
import { useState } from 'react';
import {
  informSucess,
  showConfirmError,
  showConfirmSuccess,
  showError,
} from '@/components/AccountModal/Modal';
import routerLinks from '@/utils/router-links';
import { Button, Col, Form, Input, Row } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { CustomerAPI } from '@/services/Customer';

const Payment = () => {
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(1);
  const total = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    let input = { ...values };
    let listProduct = [];
    listProduct = JSON.parse(
      localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]'
    );
    let data = [];
    listProduct.forEach((e) => {
      data.push({
        idCus: auth?.user?.data?.id,
        idPro: e?.id,
        qty: e?.sl,
        price: e?.price,
      });
    });
    input = { ...input, data };
    try {
      const req = await CustomerAPI.checkOut(input);
      console.log(req);
      if (req?.success) {
        buy();
      }
    } catch (error) {
      showError();
    }
  };
  const buy = () => {
    localStorage.removeItem('cart');
    navigate('/');
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
              style={{ marginRight: '24px' }}
              label="Địa chỉ nhận hàng"
              name="address"
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
        <Row>
          <Col span={12}>Phương thức thánh toán: </Col>
          <Col span={12}>Thanh toán khi nhận hàng</Col>
        </Row>
        <Row>
          <Col span={12}>Tổng tiền: </Col>
          <Col span={12} style={{ color: 'red' }}>
            {total?.state} VND
          </Col>
        </Row>

        <Button htmlType="submit">Đặt hàng</Button>
      </Form>
    </>
  );
};
export default Payment;
