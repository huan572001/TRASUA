import { Tabs } from 'antd';
import React, { useState } from 'react';
import Ordered from './Ordered';
import OrderCansel from './OrderCancel';
import OrderConfirm from './OrderConfirm';
const index = () => {
  const [load, setLoad] = useState(1);
  return (
    <>
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        Quản lý đơn hàng
      </h1>
      <Tabs>
        <Tabs.TabPane tab="Đã xác nhận" key="1">
          <Ordered load={load} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chờ xác nhận" key="2">
          <OrderConfirm setLoadTab={setLoad} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đã hủy" key="3">
          <OrderCansel load={load} />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default index;
