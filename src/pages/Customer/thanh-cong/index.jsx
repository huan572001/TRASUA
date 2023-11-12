// Import CSS của Ant Design

import { showSuccess } from "@/components/AccountModal/Modal";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PayMentDone = () => {
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (param?.id === "00") {
      localStorage.setItem("cart", JSON.stringify([]));
      navigate("/");
      showSuccess("Mua hàng thành công");
    }
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
