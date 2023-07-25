import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import {
  DeleteOutlined,
  EditOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Tên nhân vin",
      key: "1",
      dataIndex: "name",
    },
    {
      title: "Mã nhân viên",
      key: "4",
      dataIndex: "measure_id",
      render: (_, info) => <>{info?.measure_id === 1 ? "KG" : "Cái"}</>,
    },
    {
      title: "Số điện thoại",
      key: "4",
      dataIndex: "quantity",
    },
    {
      title: "Ngày sinh",
      key: "4",
      dataIndex: "quantity",
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
          <EditOutlined />
          {info?.status ? <LockOutlined /> : <UnlockOutlined />}
        </>
      ),
    },
  ];
};
