import React, { useEffect, useState } from "react";
import "./index.less";
import { Header } from "antd/lib/layout/layout";
import { Button, Dropdown } from "antd";
import routerLinks from "@/utils/router-links";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
const HeaderCustomer = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  // const [cout, setCout] = useState(
  //   localStorage.getItem("cart")
  //     ? JSON.parse(localStorage.getItem("cart")).length
  //     : 0
  // );
  const dataTest = useSelector((state) => state.card);
  const items = [
    {
      key: "1",
      label: (
        <>
          <div>Thông tin cá nhân</div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <div
            onClick={() => {
              navigate(routerLinks("OrderCustomer"));
            }}
          >
            Đơn hàng
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <div onClick={() => auth.logout()}>Đăng xuất</div>
        </>
      ),
    },
  ];
  return (
    <Header className="header" style={{ position: "sticky" }}>
      <div onClick={() => navigate("/")}>logo</div>
      <div className="listMenu">
        {auth?.user?.data && !auth?.user?.data?.roleId ? (
          ""
        ) : (
          // <div onClick={() => auth.logout()}>logout</div>
          <>
            <Button onClick={() => navigate(routerLinks("LoginCustomer"))}>
              Đăng nhập
            </Button>
            <Button onClick={() => navigate(routerLinks("Register"))}>
              Đăng ký
            </Button>
          </>
        )}
        <div className="cart">
          <ShoppingCartOutlined
            style={{ fontSize: "30px" }}
            onClick={() => {
              navigate(routerLinks("Cart"));
            }}
          />
          <div className="cartCount">{dataTest.cardCount}</div>
        </div>
        {auth?.user?.data && !auth?.user?.data?.roleId ? (
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <UserOutlined style={{ fontSize: "30px" }} />
          </Dropdown>
        ) : (
          ""
        )}
      </div>
    </Header>
  );
};

export default HeaderCustomer;
