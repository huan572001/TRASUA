import { keyUser } from "@/constant/auth";
import React, { useEffect, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select, Tabs } from "antd";
import routerLinks from "@/utils/router-links";
import moment from "moment";
import { StaffAPI } from "@/services/Admin/staff";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import ChangeForPassWord from "./changeForPassWord";
const ProfileStaff = () => {
  const user = JSON.parse(localStorage.getItem(keyUser));
  const [data, setData] = useState(undefined);
  const [edit, setEdit] = useState(true);
  const [passWord, setpassWord] = useState(true);
  const formRef = React.useRef(null);
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const rq = await StaffAPI.getProfile(user?.data?.id);
      if (rq?.success) {
        setData(rq?.data);
      }
    } catch (error) {}
  };
  const editProfile = async (value) => {
    try {
      const rq = await StaffAPI.editStaff(user?.data?.id, value);
      if (rq?.success) {
        setEdit(true);
        showSuccess("Chỉnh sửa thành công");
        // Navigate(routerLinks("Staff"));
      } else {
        showError(rq?.msg);
      }
    } catch (error) {
      console.log(error);
      showError();
    }
  };
  return (
    <>
      {passWord ? (
        <>
          <h1>Thông tin cá nhân</h1>
          {data !== undefined ? (
            <Form
              disabled={edit}
              onFinish={editProfile}
              ref={formRef}
              initialValues={{
                fullname: data?.fullname,
                email: data?.email,
                phone: data?.phone,
                address: data?.address,
                gender: data?.gender ? "1" : "0",
                birthday: moment(data?.birthday),
              }}
            >
              <Form.Item
                name="fullname"
                rules={[{ required: true, whitespace: true }, { max: 150 }]}
                label="Họ tên"
              >
                <Input placeholder="Họ tên" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true }]}
                label="Email"
              >
                <Input placeholder="Email" type="email" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true },
                  {
                    min: 10,
                  },
                  {
                    max: 10,
                  },
                ]}
                label="SDT"
              >
                <Input placeholder="Phone" />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[{ required: true }]}
                label="Địa chỉ"
              >
                <Input placeholder="Địa chỉ" />
              </Form.Item>
              <Form.Item
                name="birthday"
                rules={[{ required: true }]}
                label="Ngày sinh"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[{ required: true }]}
                label="Giới tính"
              >
                <Select
                  showSearch
                  placeholder="Giới tính"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
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
              {edit ? (
                <Button onClick={() => setEdit(false)} disabled={false}>
                  Chỉnh sửa
                </Button>
              ) : (
                <div className="flex">
                  <Form.Item>
                    <Button htmlType="submit">Lưu</Button>
                  </Form.Item>

                  <Button
                    htmlType="button"
                    onClick={() => {
                      formRef.current?.resetFields();
                      //   getProfile();
                      setEdit(true);
                    }}
                  >
                    Hủy
                  </Button>
                </div>
              )}
              <Button onClick={() => setpassWord(false)} disabled={false}>
                Đổi mật khẩu
              </Button>
            </Form>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <h1>Đổi mật khẩu</h1>
          <ChangeForPassWord id={user?.data?.id} setpassWord={setpassWord} />
          <Button onClick={() => setpassWord(true)}>Thông tin cá nhân</Button>
        </>
      )}
    </>
  );
};
export default ProfileStaff;
