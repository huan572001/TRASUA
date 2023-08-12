import {
  showDeleteOderModal,
  showError,
  showLockProductModal,
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
import { deleteProduct } from "./handal";
import routerLinks from "@/utils/router-links";
import { ProductAPI } from "@/services/Admin/product";
const lock = async (id) => {
  try {
    const rq = await ProductAPI.lock(id);
    if (rq?.success) {
      showSuccess();
    }
  } catch (error) {
    showError();
  }
};
const unLock = async (id) => {
  try {
    const rq = await ProductAPI.unlLock(id);
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
      title: "Tên sản phẩm",
      key: "1",
      dataIndex: "name",
    },
    {
      title: "Ảnh SP",
      key: "3",
      render: (_, info) => (
        <>
          <img
            src={info?.image}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </>
      ),
    },
    {
      title: "Giá bán",
      key: "2",
      dataIndex: "price",
    },
    {
      title: "Mô tả",
      key: "4",
      dataIndex: "descript",
    },
    {
      title: "Trạng thái",
      key: "4",
      render: (_, info) => <>{info?.activate ? "Khóa" : "Hoạt động"}</>,
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              e.stopPropagation();
              onDelete(info?.id);
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditProduct"), { state: { ...info } });
            }}
          />
          {info?.activate ? (
            <LockOutlined
              onClick={(e) => {
                showLockProductModal(false, async () => {
                  await lock(info?.id);
                  fetchRows();
                });
                e.stopPropagation();
              }}
            />
          ) : (
            <UnlockOutlined
              onClick={(e) => {
                showLockProductModal(true, async () => {
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
