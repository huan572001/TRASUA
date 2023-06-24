import { showDeleteOderModal } from '@/components/AccountModal/Modal';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: 'Tên sản phẩm',
      key: '1',
      dataIndex: 'name',
    },
    {
      title: 'Đơn vị tính',
      key: '4',
      dataIndex: 'measure_id',
      render: (_, info) => <>{info?.measure_id === 1 ? 'KG' : 'Cái'}</>,
    },
    {
      title: 'Số lượng',
      key: '4',
      dataIndex: 'quantity',
    },
    {
      title: 'Hoạt động',
      key: '8',
      render: (_, info) => (
        <DeleteOutlined
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      ),
    },
  ];
};
