import { Card } from "antd";
import { Outlet } from "react-router-dom";

const Info = () => {
  return (
    <>
      <Card>
        <Card>Thông tin cá nhân</Card>
        <Card>Đơn hàng</Card>
        <Card>Đăng xuất</Card>
      </Card>
    </>
  );
};
export default Info;
