import { notAuthAPI } from "@/services/notAuth";
import { Card, Divider, Rate } from "antd";
import { number } from "prop-types";
import { useEffect, useState } from "react";

const ListEvaluate = ({ id }) => {
  const [data, setData] = useState([]);
  const [rate, setRate] = useState(null);
  const getAllEvalute = async () => {
    try {
      const rq = await notAuthAPI.getAllRateProductById(id);
      if (rq?.success) {
        setData(rq?.data);
        setRated(rq?.data);
        // setRate(rq?.)
      }
    } catch (error) {}
  };
  const setRated = (data) => {
    let cout = 0;
    data.forEach((e) => {
      cout += e?.start;
    });
    cout = cout / data?.length;
    if (cout > 0) {
      setRate(cout.toFixed(1));
    } else {
      setRate(5.0);
    }
  };
  useEffect(() => {
    getAllEvalute();
  }, []);
  console.log(rate);
  return (
    <>
      <Card>
        <h1>Đánh giá sản phẩm</h1>
        <Card className="bg-red-300">
          {rate !== null ? (
            <>
              <div>{rate} trên 5.0 sao</div>
              <Rate defaultValue={rate} disabled={true} />
            </>
          ) : (
            ""
          )}
        </Card>
        <Divider />
        {data?.map((e, index) => {
          return (
            <div key={index}>
              <div>{e?.fullname}</div>
              <Rate defaultValue={e?.start} disabled={true} />
              <img src={e?.img} />
              <div>{e?.comment} </div>
              <Divider />
            </div>
          );
        })}
        <div className="text-red-600">Không còn đánh giá nào!</div>
      </Card>
    </>
  );
};
export default ListEvaluate;
