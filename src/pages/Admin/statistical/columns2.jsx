import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const columns2 = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã khách hàng",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Tên khách hàng",
      key: "1",
      dataIndex: "fullname",
    },
    {
      title: "Số lượng đơn hàng đã mua",
      key: "4",
      dataIndex: "orderCount",
    },
  ];
};
