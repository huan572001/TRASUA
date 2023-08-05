import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã đơn vị vật tư",
      key: "0",
      dataIndex: "id",
    },
    {
      title: "Đơn vị vật tư",
      key: "1",
      dataIndex: "name",
    },
    {
      title: "Hoạt động",
      key: "3",
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
              navigate(routerLinks("EditMeasure"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
