import { Button, Table } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { columns } from "./columns";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import useTable from "@/hook/useTable";
import { notAuthAPI } from "@/services/notAuth";
import { ProductAPI } from "@/services/Admin/product";
import { PromosionAPI } from "@/services/Admin/promotion";
// import { notAuthAPI } from "@/services/notAuth";
// import useTable from "@/hook/useTable";
const index = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    PromosionAPI.getAllPromosionNow,
    "data",
    PromosionAPI.deletePromotion
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
        Danh sach khuyến mãi
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("AddPromotion"))}
      >
        Tạo khuyến mãi
      </Button>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        // onRow={(record) => ({
        //   onClick: () => {
        //     detailproduct(record);
        //   },
        // })}
      />
    </div>
  );
};
export default index;
