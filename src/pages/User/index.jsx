import React, { useEffect, useState } from "react";
// import { getUser } from "./handal";
import { Table } from "antd";
import { columns } from "./columns";
import { detailUser } from "./editUser/ModalDetail";
import useTable from "@/hook/useTable";
import { UserAPI } from "@/services/Admin/user";
import { useNavigate } from "react-router-dom";
import BannerSearchForm from "../Admin/staff/Staff/BannerSearchForm";
// import { detailUser } from "./editUser/ModalDetail";

const Customer = () => {
  const { tableData, loading, fetchRows, onDelete, params, onReset } = useTable(
    UserAPI.getUser,
    "data"
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
        Danh sách khách hàng
      </h1>
      <BannerSearchForm
        fetchRows={fetchRows}
        params={params}
        onReset={(e) => onReset(e)}
      />
      <Table
        columns={columns(() => fetchRows(params))}
        dataSource={tableData?.data}
        rowKey="id"
      />
    </div>
  );
};
export default Customer;
