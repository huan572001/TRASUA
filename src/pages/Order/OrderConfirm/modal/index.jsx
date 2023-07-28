import { Button, Modal, Select } from "antd";
import { useState } from "react";
import { confirmOrder } from "../../handal";
import { useAuth } from "@/context/AuthProvider";
import { keyUser } from "@/constant/auth";
const FormShiper = ({ info, setload }) => {
  const [data, setData] = useState(1);
  const auth = JSON.parse(localStorage.getItem(keyUser));
  const handleChange = (value) => {
    setData(value);
  };
  const onChange = async () => {
    let status = await confirmOrder(info?.id, {
      staff_id: auth?.data?.id,
      shipper_id: data,
    });
    if (status) {
      setload(true);
    }
  };
  return (
    <>
      <h1>Bạn có chắc Xác nhận đơn hàng không</h1>
      <div className="flex justify-center">
        <Button onClick={() => onChange()}>Xác nhận</Button>
      </div>
    </>
  );
};

export const ConfirmOrder = (info, setload) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <FormShiper info={info} setload={setload} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
