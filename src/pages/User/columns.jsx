import { OrderedListOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { listOrder } from './listOrder';

export const columns = () => {
  const navigate = useNavigate();
  return [
    {
      title: 'Tên khách hàng',
      key: '1',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      key: '2',
      dataIndex: 'email',
    },
    {
      title: 'Số điện thoại',
      key: '3',
      dataIndex: 'phone',
    },
    {
      title: 'Ngày sinh',
      key: '4',
      render: (_, info) => <>{moment(info?.bithday).format('DD/MM/YYYY')}</>,
    },
    {
      title: 'Giới tính',
      key: '4',
      render: (_, info) => <>{info?.gender ? <>Nam</> : <>Nư</>}</>,
    },
    {
      title: 'Hoạt động',
      key: '4',
      render: (_, info) => (
        <>
          <OrderedListOutlined
            onClick={(e) => {
              e.stopPropagation();
              listOrder(info?.id);
            }}
          />
        </>
      ),
    },
  ];
};
