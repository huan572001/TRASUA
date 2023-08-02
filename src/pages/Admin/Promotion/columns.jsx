import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã khuyến mãi",
      key: "1",
      dataIndex: "name",
    },
    {
      title: "Thời gian bắt đầu",
      key: "1",
      dataIndex: "price",
    },
    {
      title: "Thời gian kết thúc",
      key: "4",
      dataIndex: "soluong",
    },
    {
      title: "Sản phẩm áp dụng khuyến mãi",
      key: "4",
      dataIndex: "soluong",
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              onDelete();
              e.stopPropagation();
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              // navigate(routerLinks("EditStaff"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
