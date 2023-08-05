import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { MeasureAPI } from "@/services/Admin/measure";
import { useState } from "react";
import routerLinks from "@/utils/router-links";
const Measure = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    MeasureAPI.getAllMeasure,
    "data",
    MeasureAPI.deleteMeasure
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
        Danh sach Đơn vị vật tư
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateMeasure"))}
      >
        Thêm đơn vị vật tư
      </Button>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        // onRow={(record) => ({
        //   onClick: () => {
        //     navigate(routerLinks("AddIngredient"), { state: { ...record } });
        //   },
        // })}
      />
    </div>
  );
};
export default Measure;
