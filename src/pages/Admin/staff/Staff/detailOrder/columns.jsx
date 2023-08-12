import { OrderedListOutlined } from "@ant-design/icons";
import moment from "moment";
// import { listOrder } from './listOrder';

export const columns = () => {
  return [
    {
      title: "OrderId",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "StaffId",
      key: "4",
      dataIndex: "staff_id",
    },
    {
      title: "UserId",
      key: "2",
      dataIndex: "customer_id",
    },
    {
      title: "Địa chỉ",
      key: "3",
      dataIndex: "address",
    },
    {
      title: "Thời gian",
      key: "3",
      dataIndex: "date",
    },
  ];
};
