import React, { useEffect, useState } from 'react';
import { getUser } from './handal';
import { Table } from 'antd';
import { columns } from './columns';
import { detailUser } from './editUser/ModalDetail';

const index = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    // getUser(setdata);
  }, []);
  return (
    <div>
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        Danh sách khách hàng
      </h1>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            detailUser(record);
          },
        })}
      />
    </div>
  );
};
export default index;
