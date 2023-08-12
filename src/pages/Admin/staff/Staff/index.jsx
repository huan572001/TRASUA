import useTable from "@/hook/useTable";
import { Button, Pagination, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { useState } from "react";
import routerLinks from "@/utils/router-links";
import { columns } from "../Staff/columns";
import { StaffAPI } from "@/services/Admin/staff";
import BannerSearchForm from "./BannerSearchForm";
import { detailIngredientStaff } from "./detailIngradient/ModalDetail";
import { detailOrderStaff } from "./detailOrder/ModalDetail";
const WareHouse = ({
  tableData,
  params,
  onPageChange,
  onPageSizeChange,
  fetchRows,
  onDelete,
  loading,
}) => {
  const findData = () => {
    const newData = tableData?.data?.filter((e) => {
      return e?.roleId === 2;
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
        Danh sach nhân viên kinh doanh
      </h1>

      <Table
        columns={columns(onDelete, () => fetchRows(params))}
        dataSource={findData()}
        rowKey="id"
        loading={loading}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            detailOrderStaff(record);
          },
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
