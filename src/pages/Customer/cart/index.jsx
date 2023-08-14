import { Button, Card, Col, Row } from "antd";
import "./index.less";
import { useEffect, useState } from "react";
import Detail from "./detalCart";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { errorPayment } from "@/components/AccountModal/Modal";
import { useAuth } from "@/context/AuthProvider";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(
    JSON.parse(
      localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]"
    )
  );
  const auth = useAuth();
  const navigate = useNavigate();
  const payment = () => {
    if (auth?.user) {
      if (data.length > 0) navigate(routerLinks("Payment"), { state: total });
      else {
        errorPayment();
      }
    } else {
      navigate(routerLinks("LoginCustomer"));
    }
  };
  useEffect(() => {
    let cout = 0;
    data?.forEach((e) => {
      if (e["promotion.percent"] !== null) {
        cout += (e?.price * e?.sl * (100 - e["promotion.percent"])) / 100;
      } else {
        cout += e?.price * e?.sl;
      }
    });

    setTotal(cout);
    // totalF();
  }, [data]);

  return (
    <>
      <Card style={{ width: "100%" }}>
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
        return <Detail key={index} data={child} setList={setData} />;
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
