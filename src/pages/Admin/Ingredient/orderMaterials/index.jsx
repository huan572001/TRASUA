import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
const FormIngredient = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    IngrediantAPI.getAllIngredient,
    "data"
  );
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
        Danh sach Hóa đơn Vat tu
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("AddIngredient"))}
      >
        Tạo hóa đơn vật tư
      </Button>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {
            // navigate(routerLinks("AddIngredient"), { state: { ...record } });
          },
        })}
      />
    </div>
  );
};
export default FormIngredient;
