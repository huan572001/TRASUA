import { Card, Modal, Table } from "antd";
import { columns } from "./columns";
import { useState } from "react";
import { detailOrder } from "@/pages/Order/detailOrder/ModalDetail";

const TabOrder = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Table columns={columns(setIsModalOpen)} dataSource={data} rowKey="id" />
    </>
  );
};
export default TabOrder;
