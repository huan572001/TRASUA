import { Card, Modal, Table } from "antd";
import { columns } from "./columns";
import { useState } from "react";
import { detailOrder } from "@/pages/Order/detailOrder/ModalDetail";

const TabOrder = ({ data, setLoadAPI }) => {
  return (
    <>
      <Table columns={columns(setLoadAPI)} dataSource={data} rowKey="id" />
    </>
  );
};
export default TabOrder;
