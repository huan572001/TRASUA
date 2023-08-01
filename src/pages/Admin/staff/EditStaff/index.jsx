import { Button, Form, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
const EditStaff = () => {
  const state = useLocation();
  const navigate = useNavigate();
  const onChange = (value) => {
    console.log(value);
    navigate(routerLinks("Staff"));
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
          fullname: state?.state?.name,
          email: state?.state?.email,
          phone: state?.state?.phone,
          role: state?.state?.role,
        }}
      >
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
        <Form.Item name="role" rules={[{ required: true }]} label="Quyền">
          <Select
            showSearch
            placeholder="Quyền"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "kg",
              },
              {
                value: "2",
                label: "g",
              },
              {
                value: "3",
                label: "cai",
              },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Lưu</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditStaff;
