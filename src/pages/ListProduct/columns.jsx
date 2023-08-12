import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "./handal";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
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
      title: "Trang thai",
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
        </>
      ),
    },
  ];
};
