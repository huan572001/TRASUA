import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import "./ModalDetail.less";
import { product } from "@/assets";
import { useEffect, useState } from "react";
import { ProductAPI } from "@/services/Admin/product";
const { TextArea } = Input;
const Product = ({ info }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await ProductAPI.getProductById(info?.id);
        if (req?.success) {
          setData(req?.data);
        }
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <>
      <div>
        <div>
          {info?.image ? (
            <img style={{ maxWidth: "100%" }} src={info?.image} alt="logo" />
          ) : (
            <img style={{ maxWidth: "100%" }} src={product} alt="logo" />
          )}
        </div>
        <div>
          <div>Tên Sản phẩm : {info?.name}</div>
          <div>Giá Sản phẩm : {info?.price} vnd</div>
          <div>Mô tả Sản phẩm : {info?.descript}</div>
        </div>
        <h1>Thành phần</h1>
        {data?.map((e, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <div>Tên: {e?.ingredient?.name}</div>
              <div>
                Số lượng: {e?.quantity}
                {e?.ingredient?.measure_id === 1 ? "kg" : "cái"}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export const detailproduct = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <Product info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
