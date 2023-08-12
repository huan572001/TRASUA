import { Button, Table } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { columns } from "./columns";

import { detailproduct } from "./detailProduct/ModalDetail";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { notAuthAPI } from "@/services/notAuth";
import useTable from "@/hook/useTable";
import { ProductAPI } from "@/services/Admin/product";
import BannerSearchForm from "../Admin/staff/Staff/BannerSearchForm";
const index = () => {
  const { tableData, loading, fetchRows, onDelete, params, onReset } = useTable(
    ProductAPI.getAllProduct,
    "data",
    ProductAPI.deleteProduct
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows(params);
  }, []);

  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Danh sach san pham
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateProduct"))}
      >
        Thêm sản phẩm
      </Button>
      <BannerSearchForm
        fetchRows={fetchRows}
        params={params}
        onReset={(e) => onReset(e)}
      />
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {
            detailproduct(record);
          },
        })}
      />
    </div>
  );
};
export default index;
