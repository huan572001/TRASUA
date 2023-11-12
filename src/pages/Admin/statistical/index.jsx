import useTable from "@/hook/useTable";
import { Button, DatePicker, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { columns2 } from "./columns2";
import { StatiscalAPI } from "@/services/Admin/statistical";
import moment from "moment";
import * as XLSX from "xlsx";
import { data } from "autoprefixer";
import { saveAs } from "file-saver";
const { RangePicker } = DatePicker;

const Product = () => {
  const { tableData, loading, fetchRows, onDelete, params } = useTable(
    StatiscalAPI.statisticalProductVer2,
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

  const handleExportExcelProduct = async () => {
    console.log(tableData);
    const workbook = XLSX.utils.book_new();
    if (tableData.data.length === 0) {
      message.error("Chưa có dữ liệu để xuất");
    } else {
      const modifiedData = tableData.data.map((item) => ({
        Ảnh: item.image,
        "Tên sản phẩm": item.name,
        "Giá sản phẩm": item.price,
        "Số lượng bán được": item.sl,
        "Tổng tiền": item.profit,
      }));

      const ThongKeKhachHangTop = XLSX.utils.json_to_sheet(modifiedData);
      XLSX.utils.book_append_sheet(workbook, ThongKeKhachHangTop, "");

      // Tính tổng số đơn
      const tongDon = modifiedData.reduce(
        (total, item) => total + item["Tổng tiền"],
        0
      );
      const tongDonRow = [{}, "Tổng số tiền", tongDon];
      XLSX.utils.sheet_add_aoa(ThongKeKhachHangTop, [tongDonRow], {
        origin: -1,
      });

      // Xuất file
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const dataBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = "Thống kê sản phẩm";
      saveAs(dataBlob, fileName);
    }
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
      <div>Tổng lợi nhuận: {tableData?.total} VND</div>
      <Button onClick={handleExportExcelProduct}>Xuất Excel</Button>
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

  const handleExportExcelCustomer = async () => {
    const req = await StatiscalAPI.customerTop();
    // console.log(req?.data);
    const workbook = XLSX.utils.book_new();
    if (req.data.length === 0) {
      message.error("Chưa có dữ liệu để xuất");
    } else {
      const modifiedData = req.data.map((item) => ({
        "Mã khách hàng": item.id,
        "Tên khách hàng": item.fullname,
        "Số đơn hàng đã đặt mua": item.orderCount,
      }));

      const ThongKeKhachHangTop = XLSX.utils.json_to_sheet(modifiedData);
      XLSX.utils.book_append_sheet(workbook, ThongKeKhachHangTop, "");

      // Tính tổng số đơn
      const tongDon = modifiedData.reduce(
        (total, item) => total + item["Số đơn hàng đã đặt mua"],
        0
      );
      const tongDonRow = [{}, "Tổng số đơn đã đặt", tongDon];
      XLSX.utils.sheet_add_aoa(ThongKeKhachHangTop, [tongDonRow], {
        origin: -1,
      });

      // Xuất file
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const dataBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = "Thống kê khách hàng top";
      saveAs(dataBlob, fileName);
    }
  };
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
      <Button onClick={handleExportExcelCustomer}>Xuất Excel</Button>
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
