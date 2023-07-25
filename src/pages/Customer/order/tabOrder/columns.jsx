import {
  DeleteOutlined,
  EyeOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
// import { listOrder } from './listOrder';

export const columns = (setIsModalOpen) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã đơn hàng",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Địa chỉ nhận",
      key: "4",
      dataIndex: "staff_id",
    },
    {
      title: "Số điện thoại",
      key: "2",
      dataIndex: "customer_id",
    },
    {
      title: "Tổng tiền",
      key: "3",
      dataIndex: "address",
    },
    {
      title: "Hoạt động",
      key: "3",
      render: (_, info) => (
        <>
          <EyeOutlined onClick={() => setIsModalOpen(true)} />
          {"  | "}
          <DeleteOutlined />
        </>
      ),
    },
  ];
};
