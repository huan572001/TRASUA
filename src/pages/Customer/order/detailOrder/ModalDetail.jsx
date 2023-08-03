import { Button, Card, Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { OrderAPI } from "@/services/Admin/order";
import { detailproduct } from "../../listProduct/detailProduct/ModalDetail";

const Product = ({ info }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await OrderAPI.getOrderById(info);
        if (req?.success) {
          let a = 0;
          setData(req?.data);
          req?.data.forEach((e) => {
            a += e.price * e.quantity;
          });
          setTotal(a);
        }
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <>
      {data?.map((e, index) => {
        return (
          <Card key={index} onClick={() => detailproduct(e?.product)}>
            <Row>
              <Col span={6}>
                <img
                  src={e?.product?.image}
                  style={{
                    width: 80,
                  }}
                />
              </Col>
              <Col span={6}>Tên: {e?.product?.name}</Col>
              <Col span={6}>giá: {e?.product?.price}</Col>
              <Col span={6}>Số lượng: {e?.quantity}</Col>
            </Row>
          </Card>
        );
      })}
      <div>{`Tổng tiền: ${total} `}</div>
    </>
  );
};
export const detailOrder = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <Product info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
