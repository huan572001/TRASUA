import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import "../index.less";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomerAPI } from "@/services/Customer";
import { showError } from "@/components/AccountModal/Modal";
const Detail = ({ data, setList }) => {
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
  const addProduct = () => {
    let arrCard = [];
    let check = [];
    arrCard = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    arrCard.forEach((element) => {
      if (element?.id === data?.id) {
        element.sl += 1;
      }
    });
    arrCard.forEach((e) => {
      check.push({
        id: e?.id,
        quantity: e?.sl,
      });
    });
    checkOrder(check, arrCard);
  };
  const checkOrder = async (values, arrCard) => {
    try {
      const rq = await CustomerAPI.checkOrder(values);
      if (rq?.success) {
        localStorage.setItem("cart", JSON.stringify(arrCard));
        setCount((c) => c + 1);
        setList(arrCard);
      } else {
        showError("Sản phẩm không con đủ số lượng");
      }
    } catch (error) {
      showError("Sản phẩm không con đủ số lượng");
    }
  };
  const setListData = () => {
    let arrCard = [];
    arrCard = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    arrCard.forEach((element) => {
      if (element?.id === data?.id) {
        element.sl -= 1;
      }
    });
    localStorage.setItem("cart", JSON.stringify(arrCard));
    setCount((c) => c - 1);
    setList(arrCard);
  };
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
            <div>
              {data["promotion.percent"] !== null ? (
                <>
                  <div className="line-through">{data?.price}</div>
                  <div>
                    {(data?.price * (100 - data["promotion.percent"])) / 100}
                  </div>
                </>
              ) : (
                <div>{data?.price}</div>
              )}
            </div>

            <Button.Group>
              <Button
                onClick={() => {
                  count === 1 ? null : setListData();
                }}
              >
                -
              </Button>
              <Button>{count}</Button>
              <Button
                onClick={() => {
                  addProduct();
                }}
              >
                +
              </Button>
            </Button.Group>
            <div>
              {(data?.price * (100 - data["promotion.percent"])) / 100}x{count}=
              {((data?.price * (100 - data["promotion.percent"])) / 100) *
                count}
            </div>
            <div onClick={() => deleteChild()}>Xóa</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Detail;
