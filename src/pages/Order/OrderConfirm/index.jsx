import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { getOrdered } from '../handal';
import { detailOrder } from '../detailOrder/ModalDetail';
// import { listProductByOrderID } from '@/pages/User/listOrder/listProductOrder';

const index = ({ setLoadTab }) => {
  const [data, setdata] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (load) {
      getOrdered(setdata, null);
      setLoad(false);
      setLoadTab((tab) => (tab += 1));
    }
  }, [load]);
  return (
    <div>
      <Table
        columns={columns(setLoad)}
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
