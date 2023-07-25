import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { useState } from "react";
import routerLinks from "@/utils/router-links";
const Staff11 = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    IngrediantAPI.getAllIngredient,
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
        Danh sach nhân viên kinh doanh
      </h1>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {
            navigate(routerLinks("AddIngredient"), { state: { ...record } });
          },
        })}
      />
    </div>
  );
};
export default Staff11;
