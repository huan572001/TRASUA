import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { keyUser } from "@/constant/auth";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { Button, Form, Input, Tabs } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import WareHouse from "./warehouse";
import Staff11 from "./Staff";
import useTable from "@/hook/useTable";
import { StaffAPI } from "@/services/Admin/staff";
import { useEffect } from "react";
import BannerSearchForm from "./Staff/BannerSearchForm";
const Staff = () => {
  const navigate = useNavigate();
  const {
    tableData,
    loading,
    fetchRows,
    onDelete,
    onPageChange,
    params,
    onPageSizeChange,
    onReset,
  } = useTable(StaffAPI.getAllStaff, "data", StaffAPI.deleteStaff);
  // const [data, setdata] = useState([]);
  useEffect(() => {
    fetchRows(params);
  }, []);
  return (
    <>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Quản lý nhân viên
      </h1>
      <Button onClick={() => navigate(routerLinks("AddStaff"))} className="btn">
        Thêm nhân viên
      </Button>
      <BannerSearchForm
        fetchRows={fetchRows}
        params={params}
        onReset={(e) => onReset(e)}
      />
      <Tabs>
        <Tabs.TabPane tab="Nhân viên kho" key="1">
          <WareHouse
            tableData={tableData}
            params={params}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            fetchRows={fetchRows}
            onDelete={onDelete}
            loading={loading}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Nhân viên kinh doanh" key="2">
          <Staff11
            tableData={tableData}
            params={params}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            fetchRows={fetchRows}
            onDelete={onDelete}
            loading={loading}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Staff;
