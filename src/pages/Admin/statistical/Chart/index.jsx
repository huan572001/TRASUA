import { useEffect, useState } from 'react';
import './index.less';
import { StatiscalAPI } from '@/services/Admin/statistical';
const PieChart = () => {
  const [data, setData] = useState([]);
  const [taodo, settaodo] = useState(0);
  let total = 0;
  let deg = 45;

  const coler = ['#f0c149', '#23318d', '#a92fa7', '#39af54'];
  useEffect(() => {
    const a = async () => {
      try {
        const req = await StatiscalAPI.statisticalShipper();
        if (req?.success) {
          setData(req?.data);
          req?.data?.forEach((element) => {
            total += element?.soluong;
          });
          if (total === 0) {
            settaodo(800 / req?.data.length);
          }
        }
      } catch (error) {}
    };
    a();
  }, []);
  return (
    <>
      <h1>Thống kê shipper</h1>
      <div className="pie-chart">
        {data?.map((e, index) => {
          if (index > 0 && total !== 0) {
            deg += ((data[index - 1]?.soluong / total) * 100 * 360) / 100;
          }
          if (total === 0) {
            deg += 360 / data.length;
          }
          if (total !== 0) {
            taodo = (100 * (e?.soluong / total) * 100) / 20;
          }

          return (
            <>
              <div
                className="slice"
                style={{
                  backgroundColor: coler[index],
                  transform: `rotate(${deg}deg)`,
                  clipPath: `polygon(0 0, ${taodo}% 0, 50% 50%)`,
                }}
              >
                <div
                  style={{
                    marginTop: 20,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div>
                    {e?.shipper_name}
                    <div>SL :{e?.soluong}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PieChart;
