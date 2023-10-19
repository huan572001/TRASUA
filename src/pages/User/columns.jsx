import {
  LockOutlined,
  OrderedListOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { listOrder } from "./listOrder";
import {
  showError,
  showLockUserModal,
  showSuccess,
} from "@/components/AccountModal/Modal";
import { UserAPI } from "@/services/Admin/user";
const lock = async (id) => {
  try {
    const rq = await UserAPI.lock(id);
    if (rq?.success) {
      showSuccess();
    }
  } catch (error) {
    showError();
  }
};
const unLock = async (id) => {
  try {
    const rq = await UserAPI.unlLock(id);
    if (rq?.success) {
      showSuccess();
    }
  } catch (error) {
    showError();
  }
};
export const columns = (fetchRows) => {
  const navigate = useNavigate();

  return [
    {
      title: "Tên khách hàng",
      key: "1",
      dataIndex: "fullname",
    },
    {
      title: "Email",
      key: "2",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      key: "3",
      dataIndex: "phone",
    },
    {
      title: "Ngày sinh",
      key: "4",
      render: (_, info) => <>{moment(info?.bithday).format("DD/MM/YYYY")}</>,
    },
    {
      title: "Giới tính",
      key: "4",
      render: (_, info) => <>{info?.gender ? <>Nam</> : <>Nữ</>}</>,
    },
    {
      title: "Trạng thái",
      key: "4",
      render: (_, info) => (
        <>{info?.isAcctive === 1 ? <>Vô hiệu</> : <>Hoạt động</>}</>
      ),
    },
    {
      title: "Hoạt động",
      key: "4",
      render: (_, info) => (
        <>
          {/* <OrderedListOutlined
            onClick={(e) => {
              e.stopPropagation();
              // listOrder(info?.id);
            }}
          /> */}
          {info?.isAcctive === 0 ? (
            <LockOutlined
              onClick={(e) => {
                showLockUserModal(false, async () => {
                  await lock(info?.id);
                  fetchRows();
                });
                e.stopPropagation();
              }}
            />
          ) : (
            <UnlockOutlined
              onClick={(e) => {
                showLockUserModal(true, async () => {
                  await unLock(info?.id);
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
