import useTable from "@/hook/useTable";
import { Button, Pagination, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { useState } from "react";
import routerLinks from "@/utils/router-links";
import { columns } from "../Staff/columns";
import { StaffAPI } from "@/services/Admin/staff";
const WareHouse = () => {
  const {
    tableData,
    loading,
    fetchRows,
    onDelete,
    onPageChange,
    params,
    onPageSizeChange,
  } = useTable(StaffAPI.getAllStaff, "data", StaffAPI.deleteStaff);
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows(params);
  }, []);
  const findData = () => {
    const newData = tableData?.data?.filter((e) => {
      return e?.roleId === 3;
    });
    return newData;
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Danh sach nhân viên kho
      </h1>
      <Table
        columns={columns(onDelete, () => fetchRows(params))}
        dataSource={findData()}
        rowKey="id"
        loading={loading}
        pagination={false}
        onRow={(record) => ({
          // onClick: () => {
          //   navigate(routerLinks("AddIngredient"), { state: { ...record } });
          // },
        })}
      />
      <Pagination
        className="ant-table-pagination ant-table-pagination-right"
        total={tableData?.total}
        showQuickJumper
        current={params?.page}
        showSizeChanger={true}
        onChange={(page) => {
          onPageChange({ page: page });
        }}
        onShowSizeChange={(size) => {
          onPageSizeChange({ size: size });
        }}
      />
    </div>
  );
};
export default WareHouse;
