import useTable from '@/hook/useTable';
import { Button, Table } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { columns } from './columns';
import { columns2 } from './columns2';
import { StatiscalAPI } from '@/services/Admin/statistical';
import PieChart from './Chart';
const Product = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    StatiscalAPI.statisticalProduct,
    'data'
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows();
  }, []);
  console.log(tableData);
  return (
    <div>
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        Thống kê số lượng
      </h1>
      <Table
        columns={columns()}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {},
        })}
      />
    </div>
  );
};
const Revenue = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    StatiscalAPI.revenue,
    'datatk'
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows();
  }, []);
  return (
    <div>
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        Thống kê Doanh thu
      </h1>
      <Table
        columns={columns2()}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {},
        })}
      />
      <div
        style={{
          fontSize: 30,
        }}
      >
        Tổng doanh thu ngày: {tableData?.total} VND
      </div>
    </div>
  );
};
const Statistical = () => {
  return (
    <>
      <Product />
      <PieChart />
      <Revenue />
    </>
  );
};

export default Statistical;
