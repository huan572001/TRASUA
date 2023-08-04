import { notAuthAPI } from "@/services/notAuth";
import { Card, Divider, Rate } from "antd";
import { useEffect, useState } from "react";

const ListEvaluate = ({ id }) => {
  const [data, setData] = useState([]);
  const [rate, setRate] = useState(5);
  const getAllEvalute = async () => {
    try {
      const rq = await notAuthAPI.getAllRateProductById(id);
      if (rq?.success) {
        setData(rq?.data);
        // setRate(rq?.)
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllEvalute();
  }, []);
  return (
    <>
      <Card>
        <h1>Đánh giá sản phẩm</h1>
        <Card className="bg-red-300">
          <div>{rate} trên 5.0 sao</div>
          <Rate defaultValue={rate} />
        </Card>
        <Divider />
        {data?.map((e) => {
          return (
            <>
              <div>{e?.customer_id}</div>
              <Rate defaultValue={e?.start} />
              <img src={e?.img} />
              <div>{e?.comment} </div>
              <Divider />
            </>
          );
        })}
        <div className="text-red-600">Không còn đánh giá nào!</div>
      </Card>
    </>
  );
};
export default ListEvaluate;
