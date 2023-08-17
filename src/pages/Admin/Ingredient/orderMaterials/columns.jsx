import {
  DeleteOutlined,
  EditOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import {
  showError,
  showLockOrderModal,
  showLockUserModal,
  showSuccess,
} from "@/components/AccountModal/Modal";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
const lock = async (id) => {
  try {
    const rq = await IngrediantAPI.lockOrder(id);
    if (rq?.success) {
      showSuccess();
    }
  } catch (error) {
    showError();
  }
};
const unLock = async (id) => {
  try {
    const rq = await IngrediantAPI.unLockOrder(id);
    if (rq?.success) {
      showSuccess();
    }
  } catch (error) {
    showError();
  }
};
export const columns = (onDelete, fetchRows) => {
  const navigate = useNavigate();
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
      render: (_, info) => <>{info?.activate === 1 ? "Hủy" : "Hoàn thành"}</>,
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          {info?.activate === 1 ? (
            <LockOutlined
              onClick={(e) => {
                e.stopPropagation();
                showLockOrderModal(false, async () => {
                  await unLock(info?.id);
                  fetchRows();
                });
              }}
            />
          ) : (
            <UnlockOutlined
              onClick={(e) => {
                e.stopPropagation();
                showLockOrderModal(true, async () => {
                  await lock(info?.id);
                  fetchRows();
                });
              }}
            />
          )}
        </>
      ),
    },
  ];
};
