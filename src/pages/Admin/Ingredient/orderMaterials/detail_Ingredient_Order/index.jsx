import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { Button, Card, Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect, useState } from "react";
const { TextArea } = Input;
const Product = ({ info }) => {
  const [listVT, setListVT] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await IngrediantAPI.getAllIngredientOrderById(info?.id);
        if (req?.success) {
          setListVT(req?.data);
        }
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <>
      <h1>Hóa đơn vật tư</h1>
      <div className="flex">
        <div>Thời gian tạo:</div>
        <div>{info?.date}</div>
      </div>
      <div className="flex">
        <div>Mã nhân viên: </div>
        <div>{info?.staff_id}</div>
      </div>
      <div className="flex">
        <div>Tên nhân viên: </div>
        <div>{info["staff.fullname"]}</div>
      </div>
      {listVT?.map((e, index) => {
        return (
          <Card key={index}>
            <div className="flex justify-between">
              <div>Tên sản phẩm: {e["ingredient.name"]}</div>
              <div>Đơn vị tính: {e["ingredient.measure.name"]}</div>
              <div>Số lượng: {e?.quantity}</div>
              <div>Giá: {e?.price}</div>
            </div>
          </Card>
        );
      })}
    </>
  );
};
export const detailOrderIngredient = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <Product info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
