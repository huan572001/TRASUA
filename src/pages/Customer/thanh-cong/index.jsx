// Import CSS của Ant Design

import { useEffect } from "react";

const PayMentDone = () => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]));
  }, []);
  return (
    <>
      <h1>Thanh toán của bạn đã thành công</h1>
    </>
    //       <p>Thanh toán của bạn đã thành công</p>
    //       <p>XIN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG TẠI PHÚC LONG</p>
    //       <Button
    //         type="primary"
    //         className="btnTransaction"
    //         onClick={handleSubmit}
    //       >
    //         Trở về trang chủ
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PayMentDone;
