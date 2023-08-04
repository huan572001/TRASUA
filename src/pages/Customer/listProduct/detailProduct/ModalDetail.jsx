import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import "./ModalDetail.less";
import { product } from "@/assets";
import { useState } from "react";
import { addProduct } from "../handal";
import ListEvaluate from "../ListEvaluate";
const { TextArea } = Input;
const FormProduct = ({ info }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="BodyBanner">
        <Row>
          <Col span={12}>
            <div className="imgBanner">
              {info?.image ? (
                <img src={info?.image} alt="logo" />
              ) : (
                <img src={product} alt="logo" />
              )}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ textAlign: "center" }}>
              <div>{info?.name}</div>
              <div>{info?.price} VND</div>
              <Button.Group>
                <Button
                  onClick={() => {
                    count === 1 ? null : setCount((c) => c - 1);
                  }}
                >
                  -
                </Button>
                <Button>{count}</Button>
                <Button
                  onClick={() => {
                    setCount((c) => c + 1);
                  }}
                >
                  +
                </Button>
              </Button.Group>
              <div>{info?.descript}</div>
              <Button className="btn" onClick={() => addProduct(info, count)}>
                Them vao gio hang
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <ListEvaluate id={info?.id} />
    </>
  );
};
export const detailproduct = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <FormProduct info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
