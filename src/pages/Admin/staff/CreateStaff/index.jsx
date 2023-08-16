import { Button, DatePicker, Form, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { StaffAPI } from "@/services/Admin/staff";
import { useEffect, useState } from "react";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import moment from "moment";

const Staff = () => {
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllRole();
  }, []);
  const getAllRole = async () => {
    try {
      const rq = await StaffAPI.getAllRole();
      if (rq?.success) {
        setRole(rq?.data);
      }
    } catch (error) {}
  };
  const createStaff = async (data) => {
    try {
      const rq = await StaffAPI.createStaff({ ...data, password: "123456" });
      if (rq?.success) {
        showSuccess("Tạo tài khoản thành công");
        navigate(routerLinks("Staff"));
      }
    } catch (error) {
      showError("Email hoặc số điện thoại bị trùng!");
    }
  };
  const onChange = (value) => {
    console.log(value);
    createStaff(value);
  };
  const disabledDate = (current) => {
    // Lấy thời gian hiện tại
    const today = moment();

    // Giới hạn chỉ được chọn từ ngày cách thời gian hiện tại 18 năm
    return current && current >= today.subtract(18, "years");
  };
  return (
    <>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Thêm nhân viên
      </h1>
      <Form onFinish={onChange}>
        <Form.Item
          name="fullname"
          rules={[{ required: true, whitespace: true }, { max: 150 }]}
          label="Họ tên"
        >
          <Input placeholder="Họ tên" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]} label="Email">
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true }]} label="SDT">
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item name="address" rules={[{ required: true }]} label="Địa chỉ">
          <Input placeholder="Địa chỉ" />
        </Form.Item>
        <Form.Item
          name="birthday"
          rules={[{ required: true }]}
          label="Ngày sinh"
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item name="gender" rules={[{ required: true }]} label="Giới tính">
          <Select
            showSearch
            placeholder="Giới tính"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Nam",
              },
              {
                value: "0",
                label: "Nữ",
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="roleId" rules={[{ required: true }]} label="Quyền">
          <Select
            showSearch
            placeholder="Quyền"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            {role?.map((e, index) => {
              return (
                <Option key={index} value={e?.id}>
                  {e?.role_name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Tạo</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Staff;
