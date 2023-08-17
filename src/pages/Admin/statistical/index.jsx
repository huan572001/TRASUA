import useTable from "@/hook/useTable";
import { Button, DatePicker, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { columns2 } from "./columns2";
import { StatiscalAPI } from "@/services/Admin/statistical";
import PieChart from "./Chart";
import moment from "moment";
const { RangePicker } = DatePicker;

const Product = () => {
  const { tableData, loading, fetchRows, onDelete, params } = useTable(
    StatiscalAPI.statisticalProduct,
    "datatk"
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows({
      page: 1,
      amount: 10,
      search: {
        date: new Date(),
        date_end: new Date(),
      },
    });
  }, []);
  const onChange = (values) => {
    console.log(values);
    fetchRows({
      page: 1,
      amount: 10,
      search: {
        date: moment(values[0]),
        date_end: moment(values[1]),
      },
    });
  };
  const disabledDate = (current) => {
    // Cho phép chọn các ngày trong quá khứ
    return current && current >= new Date();
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Thống kê số lượng và doanh thu theo sản phẩm
      </h1>
      <RangePicker onChange={onChange} disabledDate={disabledDate} />
      <Table
        columns={columns()}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {},
        })}
      />
      <div>Tổng: {tableData?.total} VND</div>
    </div>
  );
};
const CustomerTop = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    StatiscalAPI.customerTop,
    "data"
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
          fontSize: "40px",
        }}
      >
        Thống kê Khách hàng Top
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
    </div>
  );
};
const Statistical = () => {
  return (
    <>
      <Product />
      <CustomerTop />
    </>
  );
};

export default Statistical;
