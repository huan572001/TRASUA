import { Button, DatePicker, Form, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { useEffect, useState } from "react";
import { StaffAPI } from "@/services/Admin/staff";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import moment from "moment";
import {
  VALIDATION_PHONE_E002,
  VALIDATION_required_E001,
} from "@/constant/validate";

const EditStaff = () => {
  const state = useLocation();
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
  const editStaff = async (data) => {
    try {
      const rq = await StaffAPI.editStaff({ ...data, id: state?.state?.id });
      if (rq?.success) {
        showSuccess("Chỉnh sửa thành công");
        navigate(routerLinks("Staff"));
      } else {
        showError("Email hoặc số điện thoại bị trùng!");
      }
    } catch (error) {
      console.log(error);
      showError("Email hoặc số điện thoại bị trùng!");
    }
  };
  const onChange = (value) => {
    editStaff(value);
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
        Chỉnh sửa thông tin nhân viên
      </h1>
      <Form
        onFinish={onChange}
        initialValues={{
          fullname: state?.state?.fullname,
          email: state?.state?.email,
          phone: state?.state?.phone,
          role: state?.state?.roleId,
          address: state?.state?.address,
          // birthday: state?.state?.birthday,
          gender: state?.state?.gender,
        }}
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 255, message: "chiều dài không vượt quá 255" },
          ]}
          label="Họ tên"
        >
          <Input placeholder="Họ tên" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 255, message: "chiều dài không vượt quá 255" },
          ]}
          label="Email"
        >
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: VALIDATION_required_E001,
            },
            {
              pattern: /^[0-9]{9,11}$/, // Điều kiện: 10-11 chữ số
              message: VALIDATION_PHONE_E002,
            },
          ]}
          label="SDT"
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 255, message: "chiều dài không vượt quá 255" },
          ]}
          label="Địa chỉ"
        >
          <Input placeholder="Địa chỉ" />
        </Form.Item>
        <Form.Item
          name="birthday"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
          label="Ngày sinh"
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
          label="Giới tính"
        >
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
        <Form.Item
          name="role"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
          label="Quyền"
        >
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
          <Button htmlType="submit">Lưu</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditStaff;
