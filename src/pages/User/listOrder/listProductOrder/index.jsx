import { Modal, Table } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { columns } from './columns';
// import { getProductByOrder } from '../../handal';

const ListProduct = ({ id }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    // getProductByOrder(setdata, id);
  }, []);
  return (
    <>
      <div className="BodyBanner">
        <Table dataSource={data} columns={columns()} rowKey="id" />
      </div>
    </>
  );
};
export const listProductByOrderID = (id) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    title: <h1>Danh sách chi tiết đơn hàng</h1>,
    content: <ListProduct id={id} />,
    icon: null,
    closable: true,
    width: 700,
  });
};
