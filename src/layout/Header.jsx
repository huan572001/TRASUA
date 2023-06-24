import React from 'react';
import Ava from '@/assets/tlt2.jpg';
import { Dropdown, Menu } from 'antd';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import { useAuth } from '@/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import routerLinks from '@/utils/router-links';
const HeaderComponent = ({ collapsed, handleCollapsed }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span>
          <LogoutOutlined />
          <span
            onClick={() => {
              auth.logout();
              navigate(routerLinks('Login'));
            }}
          >
            Logout
          </span>
        </span>
      </Menu.Item>
    </Menu>
  );

  // const menuLanguage = (
  //   <Menu>
  //     <Menu.Item style={{ textAlign: "left" }} key="zh_CN">
  //       <img src={Ava} className="user-avator" alt="avator" /> 简体中文
  //     </Menu.Item>
  //     <Menu.Item style={{ textAlign: "left" }} key="en_US">
  //       <img src={Ava} className="user-avator" alt="avator" /> English
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <Header
      className="main-layout-page-header"
      style={{
        padding: 0,
      }}
    >
      <div
        className="main-layout-page-header-main"
        // style={{ backgroundColor: '#F3F4F6' }}
      >
        {React.createElement(
          MenuFoldOutlined
          // {
          //   className: "trigger",
          //   onClick: () => handleCollapsed(!collapsed),
          // }
        )}
        {/* <Dropdown
        overlay={
          <Menu>
            <Menu.Item style={{ textAlign: 'left' }} key="zh_CN">
              <Ava /> 简体中文
            </Menu.Item>
            <Menu.Item style={{ textAlign: 'left' }} key="en_US">
              <Ava /> English
            </Menu.Item>
          </Menu>
        }
      ></Dropdown> */}
        <div className="actions">
          {/* <Dropdown overlay={menuLanguage}>
            <span className="user-action">
              <img src={Ava} className="user-avator" alt="avator" />
            </span>
          </Dropdown> */}
          <Dropdown overlay={menu}>
            <span className="user-action">
              <img src={Ava} className="user-avator" alt="avator" />
            </span>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
