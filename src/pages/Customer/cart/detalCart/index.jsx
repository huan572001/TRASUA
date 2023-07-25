import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import "../index.less";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Detail = ({ data, setList, setTotal }) => {
  const [count, setCount] = useState(data?.sl ? data?.sl : 1);
  const dispatch = useDispatch();
  const deleteChild = () => {
    let tmp = [];
    setList((child) => {
      tmp = child.filter((item) => item.id !== data?.id);
      localStorage.setItem("cart", JSON.stringify(tmp));
      return tmp;
    });

    dispatch({
      type: "SET_CARD",
      payload: tmp.length,
    });
  };

  useEffect(() => {
    setTotal((total) => {
      const newList = total.filter((item) => item.id !== data?.id);
      return [...newList, { id: data?.id, price: data?.price * count }];
    });
  }, [count]);
  return (
    <Card style={{ width: "100%" }}>
      <Row>
        <Col span={12}>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: 100 }}
              alt="example"
              src={
                data?.image
                  ? data?.image
                  : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }
              onClick={() => detailproduct()}
            />
            <div>{data?.name}</div>
          </div>
        </Col>
        <Col span={12}>
          <div className="cardHeader">
            <div>{data?.price}</div>
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
            <div>
              {data?.price}x{count}={data?.price * count}
            </div>
            <div onClick={() => deleteChild()}>Xóa</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Detail;
