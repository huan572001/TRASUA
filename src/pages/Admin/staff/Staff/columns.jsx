import {
  showDeleteOderModal,
  showError,
  showLockUserModal,
  showSuccess,
} from "@/components/AccountModal/Modal";
import {
  DeleteOutlined,
  EditOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { StaffAPI } from "@/services/Admin/staff";
import { async } from "q";
const lockUser = async (id) => {
  try {
    const rq = await StaffAPI.lockStaff(id);
    if (rq?.success) {
      showSuccess();
    }
  } catch (error) {
    showError();
  }
};
const unLockUser = async (id) => {
  try {
    const rq = await StaffAPI.unlLockStaff(id);
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
      title: "Tên nhân viên",
      key: "1",
      dataIndex: "fullname",
    },
    {
      title: "Mã nhân viên",
      key: "4",
      dataIndex: "id",
    },
    {
      title: "Số điện thoại",
      key: "4",
      dataIndex: "phone",
    },
    {
      title: "Giới tính",
      key: "4",
      render: (_, info) => <>{info?.gender ? "Nam" : "Nữ"}</>,
    },
    {
      title: "Ngày sinh",
      key: "4",
      dataIndex: "birthday",
    },
    {
      title: "Trạng thái",
      key: "4",
      render: (_, info) => (
        <>{info?.isAcctive === 0 ? "Đang hoạt động" : "Vô hiệu"}</>
      ),
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              onDelete(info?.id);
              e.stopPropagation();
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditStaff"), { state: { ...info } });
            }}
          />
          {info?.isAcctive === 0 ? (
            <LockOutlined
              onClick={(e) => {
                showLockUserModal(true, async () => {
                  await lockUser(info?.id);
                  fetchRows();
                });
                e.stopPropagation();
              }}
            />
          ) : (
            <UnlockOutlined
              onClick={(e) => {
                showLockUserModal(false, async () => {
                  await unLockUser(info?.id);
                  fetchRows();
                });
                e.stopPropagation();
              }}
            />
          )}
        </>
      ),
    },
  ];
};
