import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { getOrdered } from '../handal';
import { detailOrder } from '../detailOrder/ModalDetail';
// import { listProductByOrderID } from '@/pages/User/listOrder/listProductOrder';

const index = ({ load }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getOrdered(setdata, false);
  }, [load]);
  return (
    <div>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            detailOrder(record?.id);
          },
        })}
      />
    </div>
  );
};
export default index;
