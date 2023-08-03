import {
  DeleteOutlined,
  EyeOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { detailOrder } from "../detailOrder/ModalDetail";
import { showDeleteOderModal } from "@/components/AccountModal/Modal";
// import { listOrder } from './listOrder';

export const columns = () => {
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

              <DeleteOutlined onClick={() => showDeleteOderModal()} />
            </>
          ) : (
            ""
          )}
        </>
      ),
    },
  ];
};
