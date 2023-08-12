import { Button, Col, Form, Input, Modal, Row, Select, Table } from "antd";
import "./ModalDetail.less";
import { product } from "@/assets";
import { useEffect, useState } from "react";
import { ProductAPI } from "@/services/Admin/product";
import { StaffAPI } from "@/services/Admin/staff";
import { columns } from "./columns";
import useTable from "@/hook/useTable";
import { detailOrderIngredient } from "@/pages/Admin/Ingredient/orderMaterials/detail_Ingredient_Order";
import { detailOrder } from "@/pages/Order/detailOrder/ModalDetail";
const { TextArea } = Input;
const Product = ({ info }) => {
  const [data, setdata] = useState([]);
  const getOrder = async () => {
    try {
      const rq = await StaffAPI.getAllOrderByStaffId(info?.id);
      if (rq?.success) {
        setdata(rq?.code);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
      <h1> Danh sách hóa đơn của nhân viên {info?.fullname}</h1>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            detailOrder(record?.id);
          },
        })}
      />
    </>
  );
};
export const detailOrderStaff = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <Product info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
