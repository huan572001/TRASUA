import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã khuyến mãi",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Thời gian bắt đầu",
      key: "1",
      dataIndex: "start_day",
    },
    {
      title: "Thời gian kết thúc",
      key: "4",
      dataIndex: "end_day",
    },
    {
      title: "Sản phẩm áp dụng khuyến mãi",
      key: "6",
      dataIndex: "product.name",
    },
    {
      title: "Nhân viên tạo khuyến mãi",
      key: "5",
      dataIndex: "staff.fullname",
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              onDelete(info?.id, "Bạn có chắc muốn xóa Khuyến mãi này không!");
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
