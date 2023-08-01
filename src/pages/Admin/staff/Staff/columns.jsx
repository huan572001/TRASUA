import {
  showDeleteOderModal,
  showLockUserModal,
} from "@/components/AccountModal/Modal";
import {
  DeleteOutlined,
  EditOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";

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
              onDelete();
              e.stopPropagation();
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditStaff"), { state: { ...info } });
            }}
          />
          {info?.status ? (
            <LockOutlined
              onClick={(e) => {
                showLockUserModal(false);
                e.stopPropagation();
              }}
            />
          ) : (
            <UnlockOutlined
              onClick={(e) => {
                showLockUserModal(true);
                e.stopPropagation();
              }}
            />
          )}
        </>
      ),
    },
  ];
};
