import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Tên Vật tư",
      key: "1",
      dataIndex: "name",
    },
    {
      title: "Mã hóa đơn",
      key: "4",
      dataIndex: "measure_id",
      render: (_, info) => <>{info?.measure_id === 1 ? "KG" : "Cái"}</>,
    },
    {
      title: "Số lượng",
      key: "4",
      dataIndex: "measure_id",
    },
    {
      title: "Giá",
      key: "5",
      dataIndex: "quantity",
    },
    {
      title: "Thời gian tạo",
      key: "5",
      dataIndex: "measure_id",
    },
    {
      title: "Mã nhân viên",
      key: "5",
      dataIndex: "measure_id",
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditIngredient"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
