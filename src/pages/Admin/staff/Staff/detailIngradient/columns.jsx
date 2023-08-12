import { OrderedListOutlined } from "@ant-design/icons";
import moment from "moment";
// import { listOrder } from './listOrder';

export const columns = () => {
  return [
    {
      title: "Mã hóa đơn",
      key: "4",
      dataIndex: "id",
    },
    {
      title: "Thời gian tạo",
      key: "5",
      dataIndex: "date",
    },
    {
      title: "Mã nhân viên",
      key: "5",
      dataIndex: "staff_id",
    },
    {
      title: "Tên nhân viên",
      key: "5",
      dataIndex: "staff.fullname",
    },
    {
      title: "Trạng thái",
      key: "5",
      render: (_, info) => <>{info?.activate === 0 ? "Hủy" : "Hoàn thành"}</>,
    },
  ];
};
