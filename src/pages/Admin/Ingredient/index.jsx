import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { useState } from "react";
import routerLinks from "@/utils/router-links";
const index = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    IngrediantAPI.getAllIngredient,
    "data",
    IngrediantAPI.deleteIngredient
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
        Danh sách Vật tư
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateIngredient"))}
      >
        Thêm vật tư
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
export default index;
