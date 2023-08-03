import { Col, Row, Tabs } from "antd";
import Info from "../info";
import TabOrder from "./tabOrder";
import { useEffect, useState } from "react";
import { CustomerAPI } from "@/services/Customer";
import { useAuth } from "@/context/AuthProvider";
import { keyUser } from "@/constant/auth";

const OrderCustomer = () => {
  const [order, setOrder] = useState([]);
  const [orderF, setOrderF] = useState([]);
  const [orderT, setOrderT] = useState([]);
  const user = JSON.parse(localStorage.getItem(keyUser));
  const getAllOrder = async () => {
    try {
      const rq = await CustomerAPI.getAllOrder(user?.data?.id);
      if (rq?.success) {
        setOrder(rq?.data);
      }
    } catch (error) {}
  };
  const getAllOrderT = async () => {
    try {
      const rq = await CustomerAPI.getAllOrderTrue(user?.data?.id);
      if (rq?.success) {
        setOrderT(rq?.data);
      }
    } catch (error) {}
  };
  const getAllOrderF = async () => {
    try {
      const rq = await CustomerAPI.getAllOrderFalse(user?.data?.id);
      if (rq?.success) {
        setOrderF(rq?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllOrder();
    getAllOrderT();
    getAllOrderF();
  }, []);
  return (
    <>
      <Row>
        <Col span={6}>
          <Info />
        </Col>
        <Col span={18}>
          <Tabs>
            <Tabs.TabPane tab="Chờ xác nhận" key="1">
              <TabOrder data={order} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã nhận" key="2">
              <TabOrder data={orderT} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã hủy" key="3">
              <TabOrder data={orderF} />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default OrderCustomer;
