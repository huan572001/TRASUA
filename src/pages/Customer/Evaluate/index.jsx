import { Button, Col, Row, Tabs } from "antd";
import Info from "../info";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { CustomerAPI } from "@/services/Customer";
import { keyUser } from "@/constant/auth";
import FormEvaluate from "./FormEvalute";
import EditEvaluate from "./EditEvaluate";

const Evaluate = () => {
  const [reviewed, setReview] = useState([]);
  const [notReviewed, setNotReview] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [idOrder, setIDOrder] = useState();
  const [loadAPI, setLoadAPI] = useState(1);
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
  }, [loadAPI]);
  return (
    <>
      <div style={{ display: open ? "" : "none" }}>
        <FormEvaluate
          setOpen={setOpen}
          data={idOrder}
          setLoadAPI={setLoadAPI}
        />
      </div>
      <div style={{ display: openEdit ? "" : "none" }}>
        <EditEvaluate
          setOpen={setOpenEdit}
          data={idOrder}
          setLoadAPI={setLoadAPI}
        />
      </div>

      <Row>
        <Col span={6}>
          <Info />
        </Col>
        <Col span={18}>
          <Tabs>
            <Tabs.TabPane tab="Chưa đánh giá" key="1">
              {notReviewed?.map((e, index) => {
                return (
                  <Row key={index}>
                    <Col span={22}>
                      <CardProduct e={e} className="w-5/6" />
                    </Col>
                    <Col span={2}>
                      <Button
                        onClick={() => {
                          setIDOrder(e);
                          setOpen(true);
                        }}
                      >
                        Đánh giá
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đã Đánh giá" key="2">
              {reviewed?.map((e, index) => {
                return (
                  <Row key={index}>
                    <Col span={22}>
                      <CardProduct e={e} className="w-5/6" />
                    </Col>
                    <Col span={2}>
                      <Button
                        onClick={() => {
                          setIDOrder(e);
                          setOpenEdit(true);
                        }}
                      >
                        chỉnh sửa
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default Evaluate;
