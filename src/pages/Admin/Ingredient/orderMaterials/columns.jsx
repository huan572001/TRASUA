import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
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
    // {
    //   title: "Hoạt động",
    //   key: "8",
    //   render: (_, info) => (
    //     <>
    //       {/* <DeleteOutlined
    //         onClick={(e) => {
    //           e.stopPropagation();
    //         }}
    //       /> */}
    //       <EditOutlined
    //         onClick={(e) => {
    //           e.stopPropagation();
    //           navigate(routerLinks("EditIngredient"), { state: { ...info } });
    //         }}
    //       />
    //     </>
    //   ),
    // },
  ];
};
