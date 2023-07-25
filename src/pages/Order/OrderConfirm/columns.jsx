import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { cancelOrder, confirmOrder } from "../handal";
import { ConfirmOrder } from "./modal";
import { keyUser } from "@/constant/auth";
import { showDeleteOderModal } from "@/components/AccountModal/Modal";
// import { listOrder } from './listOrder';

export const columns = (setLoad) => {
  const navigate = useNavigate();
  return [
    {
      title: "OrderId",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Địa chỉ",
      key: "3",
      dataIndex: "address",
    },
    {
      title: "UserId",
      key: "2",
      dataIndex: "customer_id",
    },
    {
      title: "Hoạt động",
      key: "6",
      render: (_, info) => (
        <>
          <CheckOutlined
            onClick={(e) => {
              e.stopPropagation();
              ConfirmOrder(info, setLoad);
            }}
          />
          <Divider type="vertical" />
          <CloseOutlined
            onClick={(e) => {
              e.stopPropagation();
              showDeleteOderModal(async () => {
                const auth = JSON.parse(localStorage.getItem(keyUser));

                if (await cancelOrder(info?.id, { staff_id: auth?.data?.id })) {
                  setLoad(true);
                }
              });
            }}
          />
        </>
      ),
    },
  ];
};
