import React, { useEffect, useState } from 'react';
import './index.less';
import { Header } from 'antd/lib/layout/layout';
import { Button } from 'antd';
import routerLinks from '@/utils/router-links';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { ShoppingCartOutlined } from '@ant-design/icons';
const HeaderCustomer = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [cout, setCout] = useState(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')).length
      : 0
  );
  console.log(auth);
  return (
    <Header className="header" style={{ position: 'sticky' }}>
      <div onClick={() => navigate('/')}>logo</div>
      <div className="listMenu">
        {auth?.user?.data && !auth?.user?.data?.roleId ? (
          <div onClick={() => auth.logout()}>logout</div>
        ) : (
          <>
            <Button onClick={() => navigate(routerLinks('LoginCustomer'))}>
              Đăng nhập
            </Button>
            <Button>Đăng ký</Button>
          </>
        )}
        <div className="cart">
          <ShoppingCartOutlined
            style={{ fontSize: '30px' }}
            onClick={() => {
              navigate(routerLinks('Cart'));
            }}
          />
          <div className="cartCount">{cout}</div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderCustomer;
