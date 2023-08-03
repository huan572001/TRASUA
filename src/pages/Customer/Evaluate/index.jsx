import { Button, Col, Row, Tabs } from "antd";
import Info from "../info";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { CustomerAPI } from "@/services/Customer";
import { keyUser } from "@/constant/auth";
import FormEvaluate from "./FormEvalute";

const Evaluate = () => {
  const [reviewed, setReview] = useState([1]);
  const [notReviewed, setNotReview] = useState([]);
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem(keyUser));
  const getReviewd = async () => {
    try {
      const rq = await CustomerAPI.getAllOrderItemDone(user?.data?.id);
      if (rq?.success) {
        setReview(rq?.data);
      }
    } catch (error) {}
  };
  const getNotReview = async () => {
    try {
      const rq = await CustomerAPI.getAllOrderItemNotRate(user?.data?.id);
      if (rq?.success) {
        setNotReview(rq?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getReviewd();
    getNotReview();
  }, []);
  return (
    <>
      <div style={{ display: open ? "" : "none" }}>
        <FormEvaluate setOpen={setOpen} />
      </div>

      <Row>
        <Col span={6}>
          <Info />
        </Col>
        <Col span={18}>
          <Tabs>
            <Tabs.TabPane tab="Chưa đánh giá" key="1">
              {reviewed?.map((e) => {
                return (
                  <Row>
                    <Col span={22}>
                      <CardProduct e={e} className="w-5/6" />
                    </Col>
                    <Col span={2}>
                      <Button onClick={() => setOpen(true)}>Đánh giá</Button>
                    </Col>
                  </Row>
                );
              })}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã Đánh giá" key="2">
              {notReviewed?.map((e) => {
                return <CardProduct e={e} />;
              })}
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default Evaluate;
