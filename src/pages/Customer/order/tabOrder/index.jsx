import { Card, Modal, Table } from "antd";
import { columns } from "./columns";
import { useState } from "react";

const TabOrder = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Card
        style={{
          display: isModalOpen ? "block" : "none",
        }}
      >
        hihihi
      </Card>
      <Table columns={columns(setIsModalOpen)} dataSource={data} rowKey="id" />
    </>
  );
};
export default TabOrder;
