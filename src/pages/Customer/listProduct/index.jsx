import { Button, Card, Col, Row, message } from "antd";
import React, { useState } from "react";
import "./index.less";
import { detailproduct } from "./detailProduct/ModalDetail";
import { useEffect } from "react";
import { notAuthAPI } from "@/services/notAuth";
import { useDispatch, useSelector } from "react-redux";
import useTable from "@/hook/useTable";
import BannerSearchForm from "@/pages/Admin/staff/Staff/BannerSearchForm";
import { CustomerAPI } from "@/services/Customer";
import { values } from "lodash";
import { showError } from "@/components/AccountModal/Modal";
import { ProductAPI } from "@/services/Admin/product";
import {
  VALIDATION_ERROR_E002,
  VALIDATION_SUCCES_E001,
} from "@/constant/validate";
const ListProduct = () => {
  const {
    tableData,
    loading,
    fetchRows,
    onDelete,
    onPageChange,
    params,
    onPageSizeChange,
    onReset,
  } = useTable(ProductAPI.getAllProduct, "data");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const dataTest = useSelector((state) => state.card);
  useEffect(() => {
    fetchRows({ ...params, activate: "0" });
    const arrCard = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    dispatch({
      type: "SET_CARD",
      payload: arrCard.length,
    });
  }, [params]);

  const addProduct = (data, sl) => {
    let arrCard = [];
    let check = [];
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
        dispatch({
          type: "SET_CARD",
          payload: arrCard.length,
        });
        success();
      } else {
        showError(VALIDATION_ERROR_E002);
      }
    } catch (error) {
      showError(VALIDATION_ERROR_E002);
    }
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: VALIDATION_SUCCES_E001,
    });
  };
  return (
    <div>
      {contextHolder}
      <div className="flex justify-center">
        <BannerSearchForm
          fetchRows={fetchRows}
          params={params}
          onReset={onReset}
        />
      </div>

      <Row gutter={10} justify="center">
        {tableData?.data?.map((child, index) => {
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
                <div className="flex justify-end">
                  {child["promotion.percent"] !== null ? (
                    <Card className="w-12 h-12 bg-amber-300 absolute p-0 promotion">
                      <div className="text-center">
                        <div>Giảm</div>
                        <div>{child["promotion.percent"]}%</div>
                      </div>
                    </Card>
                  ) : (
                    ""
                  )}

                  <img
                    style={{ width: "100%" }}
                    alt="example"
                    src={
                      child?.image
                        ? child?.image
                        : "https://giadinh.mediacdn.vn/296230595582509056/2023/2/14/tra-sua5-1676369055517942036678.jpeg"
                    }
                    onClick={() => detailproduct(child, addProduct)}
                  />
                </div>

                <div className="card">
                  <div>
                    <div>{child?.name}</div>
                    <div>{child?.price} VND</div>
                    <Button className="btn" onClick={() => addProduct(child)}>
                      Thêm vào giỏ hàng
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
