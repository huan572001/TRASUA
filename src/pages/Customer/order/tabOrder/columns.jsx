import {
  DeleteOutlined,
  EyeOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { detailOrder } from "../detailOrder/ModalDetail";
import {
  showDelete,
  showDeleteOderModal,
  showError,
  showSuccess,
} from "@/components/AccountModal/Modal";
import { CustomerAPI } from "@/services/Customer";
// import { listOrder } from './listOrder';
const deleteOrder = async (id, setLoadAPI) => {
  try {
    const rq = await CustomerAPI.deleteOrder(id);
    if (rq?.success) {
      showSuccess("Hủy đơn hàng thành công!");
      setLoadAPI((e) => (e += 1));
    } else {
      showError();
    }
  } catch (error) {
    showError();
  }
};
export const columns = (setLoadAPI) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã đơn hàng",
      key: "1",
      dataIndex: "id",
    },

    {
      title: "Địa chỉ",
      key: "3",
      dataIndex: "address",
    },
    {
      title: "Thời gian đặt",
      key: "3",
      render: (_, info) => (
        <>{moment(new Date(info?.date)).format("HH:mm:ss DD/MM/YYYY")}</>
      ),
    },
    {
      title: "Hoạt động",
      key: "3",
      render: (_, info) => (
        <>
          <EyeOutlined onClick={() => detailOrder(info?.id)} />

          {info?.status === null ? (
            <>
              {"  | "}

              <DeleteOutlined
                onClick={() =>
                  showDelete("Ban có chắc muốn hủy đơn hàng này không?", () =>
                    deleteOrder(info?.id, setLoadAPI)
                  )
                }
              />
            </>
          ) : (
            ""
          )}
        </>
      ),
    },
  ];
};
