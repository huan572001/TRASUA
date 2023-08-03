import { Card } from "antd";
import { Outlet } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { useState } from "react";
const Info = ({ data }) => {
  const [index, setIndex] = useState(data);
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <>
      <Card>
        <Card className="mb-2 ">Thông tin cá nhân</Card>
        <Card
          className="mb-2"
          onClick={() => {
            navigate(routerLinks("OrderCustomer"));
          }}
        >
          Đơn hàng
        </Card>
        <Card
          className="mb-2"
          onClick={() => {
            navigate(routerLinks("Evaluate"));
          }}
        >
          Đánh giá
        </Card>
        <Card
          onClick={() => {
            auth.logout();
            navigate(routerLinks("ListProduct"));
          }}
        >
          Đăng xuất
        </Card>
      </Card>
      <Outlet />
    </>
  );
};
export default Info;
