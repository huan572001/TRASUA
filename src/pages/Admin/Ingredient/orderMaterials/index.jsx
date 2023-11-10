import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import { detailOrderIngredient } from "./detail_Ingredient_Order";
const FormIngredient = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    IngrediantAPI.getAllIngredientOrder,
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
        Danh sách Hóa đơn Vật tư
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("AddIngredient"))}
      >
        Tạo hóa đơn vật tư
      </Button>
      <Table
        columns={columns(onDelete, fetchRows)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {
            detailOrderIngredient(record);
          },
        })}
      />
    </div>
  );
};
export default FormIngredient;
