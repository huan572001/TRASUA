import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { keyUser } from "@/constant/auth";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { Button, Form, Input, Tabs } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import WareHouse from "./warehouse";
import Staff11 from "./Staff";
const Staff = () => {
  return (
    <>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Quản lý nhân viên
      </h1>
      <Tabs>
        <Tabs.TabPane tab="Nhân viên kho" key="1">
          <WareHouse />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Nhân viên kinh doanh" key="2">
          <Staff11 />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Staff;
