import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import "./index.less";
import { detailproduct } from "./detailProduct/ModalDetail";
import { useEffect } from "react";
import { notAuthAPI } from "@/services/notAuth";
import { useDispatch, useSelector } from "react-redux";
const ListProduct = () => {
  const [data, setData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]);
  const dispatch = useDispatch();
  const dataTest = useSelector((state) => state.card);
  useEffect(() => {
    getListProduct();
    const arrCard = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    dispatch({
      type: "SET_CARD",
      payload: arrCard.length,
    });
  }, []);

  const getListProduct = async () => {
    try {
      const req = await notAuthAPI.getAllProduct();
      if (req?.success) {
        setData(req.data);
      }
    } catch (error) {}
  };
  const addProduct = (data, sl) => {
    let arrCard = [];
    let n = true;
    arrCard = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    arrCard.forEach((element) => {
      if (element?.id === data?.id) {
        if (sl) {
          element.sl += sl;
        } else {
          element.sl += 1;
        }
        n = false;
      }
    });
    if (n) {
      arrCard.push({ ...data, sl: sl ? sl : 1 });
    }
    localStorage.setItem("cart", JSON.stringify(arrCard));
    dispatch({
      type: "SET_CARD",
      payload: arrCard.length,
    });
  };
  return (
    <div>
      <Row gutter={10} justify="center">
        {data.map((child, index) => {
          return (
            <Col
              key={index}
              xl={6}
              lg={8}
              md={12}
              sm={24}
              className="gutter-row"
            >
              <Card>
                <img
                  style={{ width: "100%" }}
                  alt="example"
                  src={
                    child?.image
                      ? child?.image
                      : "https://giadinh.mediacdn.vn/296230595582509056/2023/2/14/tra-sua5-1676369055517942036678.jpeg"
                  }
                  onClick={() => detailproduct(child)}
                />
                <div className="card">
                  <div>
                    <div>{child?.name}</div>
                    <div>{child?.price}</div>
                    <Button className="btn" onClick={() => addProduct(child)}>
                      Them vao gio hang
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ListProduct;
