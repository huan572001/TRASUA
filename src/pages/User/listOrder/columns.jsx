import { OrderedListOutlined } from '@ant-design/icons';
import moment from 'moment';

export const columns = () => {
  return [
    {
      title: 'Địa chỉ',
      key: '1',
      dataIndex: 'address',
    },
    {
      title: 'Trạng thái đon hàng',
      key: '2',
      render: (_, info) => <>{info?.status ? 'chờ xác nhận' : 'Đã xác nhận'}</>,
    },
    {
      title: 'Thời gian đặt hàng',
      key: '4',
      render: (_, info) => <>{moment(info?.createdAt).format('DD/MM/YYYY')}</>,
    },
  ];
};
