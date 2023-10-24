import { getFirstPathCode } from "@/utils/getFirstPathCode";
import { Layout, Menu, Spin } from "antd";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import HeaderComponent from "./Header";
import "./index.less";
import listMenu from "./menus";

import { keyToken } from "@/constant/auth";
import routerLinks from "@/utils/router-links";

const { Header, Sider, Content } = Layout;
const LayoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);
  const [openKey, setOpenkey] = useState();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const code = getFirstPathCode(location.pathname);

    setOpenkey(code);
  }, [location.pathname]);

  return (
    <Layout className="main-layout-page" hasSider>
      <Sider
        className="sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={270}
      >
        <div className={"logo "}>
          <img
            alt="logo"
            src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/639d4fb26949fb0d309d5aba_logo-phuc-long-coffee-and-tea.jpg"
          />
          <div className={collapsed ? "hidden" : "" + "logoName"}>
            <div className={"name"}>Phuc long</div>
            <div className={"hastag"}>#HH</div>
          </div>
        </div>
        <Menu
          className="menu"
          defaultSelectedKeys={["1"]}
          onClick={(info) => {
            !localStorage.getItem(keyToken)
              ? navigate(routerLinks("Login"), { replace: true })
              : navigate(routerLinks(info.key));
          }}
          theme="#224922"
          mode="inline"
          items={listMenu()}
        />
      </Sider>
      <Layout className="site-layout" width="400px">
        <HeaderComponent collapsed={collapsed} handleCollapsed={setCollapsed} />
        {/* <HeaderComponent /> */}

        <Suspense
          fallback={
            <div className="flex justify-center items-center flex-1">
              <Spin size="large" />
            </div>
          }
        >
          <Layout
            style={{
              backgroundColor: "#F3F4F6",
            }}
          >
            {/* <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb> */}
            <Content
              className="main-layout-page-content"
              // style={{ overflow: 'auto' }}
            >
              <div
                style={{
                  padding: "24px",
                  height: "100%",
                  overflow: "auto",
                }}
              >
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Suspense>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
