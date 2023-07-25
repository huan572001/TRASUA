import { Col, Row, Tabs } from "antd";
import Info from "../info";
import TabOrder from "./tabOrder";

const OrderCustomer = () => {
  return (
    <>
      <Row>
        <Col span={6}>
          <Info />
        </Col>
        <Col>
          <Tabs>
            <Tabs.TabPane tab="Chờ xác nhận" key="1">
              <TabOrder data={[1, 2]} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã nhận" key="2">
              <TabOrder />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã hủy" key="3">
              <TabOrder />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default OrderCustomer;
