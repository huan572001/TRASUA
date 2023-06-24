import { Input, Modal, Table } from 'antd';
import './ModalDetail.less';
import { useState } from 'react';
// import { getOrderByUser } from '../handal';
import { columns } from './columns';
import { useEffect } from 'react';
// import { listProductByOrderID } from './listProductOrder';
const { TextArea } = Input;
const ListOrder = ({ id }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    // getOrderByUser(setdata, id);
  }, []);
  return (
    <>
      <div className="BodyBanner">
        <h1>Danh sách các đơn hàng</h1>
        <Table
          dataSource={data}
          columns={columns()}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => {
              // listProductByOrderID(record?.id);
            },
          })}
        />
      </div>
    </>
  );
};
export const listOrder = (id) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <ListOrder id={id} />,
    icon: null,
    closable: true,
    width: 700,
  });
};
