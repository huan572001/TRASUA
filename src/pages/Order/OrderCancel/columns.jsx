import { OrderedListOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
// import { listOrder } from './listOrder';

export const columns = () => {
  const navigate = useNavigate();
  return [
    {
      title: "OrderId",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Tên nhân viên",
      key: "4",
      dataIndex: "staff.fullname",
    },
    {
      title: "Tên khách hàng",
      key: "2",
      dataIndex: "customer.fullname",
    },
    {
      title: "Ngày",
      key: "2",
      dataIndex: "date",
    },
    {
      title: "Địa chỉ",
      key: "3",
      dataIndex: "address",
    },
  ];
};
