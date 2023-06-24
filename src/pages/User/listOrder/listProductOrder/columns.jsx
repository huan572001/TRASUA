import { OrderedListOutlined } from '@ant-design/icons';
import moment from 'moment';

export const columns = () => {
  return [
    {
      title: 'Ảnh ',
      key: '1',
      render: (_, info) => (
        <>
          <img
            style={{ maxWidth: '50px' }}
            src={info?.product?.image}
            alt="logo"
          />
        </>
      ),
    },
    {
      title: 'Tên sản phẩm',
      key: '5',
      render: (_, info) => <>{info?.product?.name}</>,
    },
    {
      title: 'Giá sản phẩm',
      key: '2',
      dataIndex: 'price',
    },
    {
      title: 'Số lượng sản phẩm',
      key: '3',
      dataIndex: 'quantity',
    },
    {
      title: 'Giảm giá',
      key: '4',
      render: (_, info) => <>{info?.product?.discout} %</>,
    },
  ];
};
