import { Button, Card, Col, Row } from 'antd';
import './index.less';
import { useEffect, useState } from 'react';
import Detail from './detalCart';
import { useNavigate } from 'react-router-dom';
import routerLinks from '@/utils/router-links';
import { errorPayment } from '@/components/AccountModal/Modal';

const Cart = () => {
  const [listTotal, setListTotal] = useState([{ id: -1, price: 0 }]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(
    JSON.parse(
      localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]'
    )
  );
  const navigate = useNavigate();
  const payment = () => {
    if (data.length > 0) navigate(routerLinks('Payment'), { state: total });
    else {
      errorPayment();
    }
  };
  const totalF = () => {
    let cout = 0;
    listTotal.forEach((e) => {
      cout += e?.price;
    });
    setTotal(cout);
  };
  useEffect(() => {
    totalF();
  }, [listTotal]);

  return (
    <>
      <Card style={{ width: '100%' }}>
        <Row>
          <Col span={12}>
            <div>Sản phẩm</div>
          </Col>
          <Col span={12}>
            <div className="cardHeader">
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Số tiền</div>
              <div>Thao tác</div>
            </div>
          </Col>
        </Row>
      </Card>
      {data.map((child, index) => {
        return (
          <Detail
            key={index}
            data={child}
            setList={setData}
            setTotal={setListTotal}
          />
        );
      })}
      <div className="tong btn">
        <div>Tổng tiền:{total} </div>
      </div>
      <Button className="buy" onClick={() => payment()}>
        Mua hàng
      </Button>
    </>
  );
};

export default Cart;
