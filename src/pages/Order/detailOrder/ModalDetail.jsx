import { Button, Card, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import { OrderAPI } from '@/services/Admin/order';
import { detailproduct } from '@/pages/ListProduct/detailProduct/ModalDetail';
const Product = ({ info }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await OrderAPI.getOrderById(info);
        if (req?.success) {
          setData(req?.data);
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
