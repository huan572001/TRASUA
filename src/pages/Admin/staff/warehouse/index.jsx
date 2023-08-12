import { Button, Pagination, Table } from "antd";

import { columns } from "../Staff/columns";

import { detailOrderStaff } from "../Staff/detailOrder/ModalDetail";
import { detailIngredientStaff } from "../Staff/detailIngradient/ModalDetail";
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
          onClick: () => {
            detailIngredientStaff(record);
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
