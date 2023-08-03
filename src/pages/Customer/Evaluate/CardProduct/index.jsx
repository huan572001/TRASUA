import { Card, Col, Row } from "antd";
import { detailproduct } from "../../listProduct/detailProduct/ModalDetail";

const CardProduct = ({ e }) => {
  return (
    <Card onClick={() => detailproduct(e?.product)}>
      <Row>
        <Col span={6}>
          <img
            src={e?.product?.image}
            style={{
              width: 80,
            }}
          />
        </Col>
        <Col span={6}>Tên: {e?.product?.name}</Col>
        <Col span={6}>giá: {e?.product?.price}</Col>
        <Col span={6}>Số lượng: {e?.quantity}</Col>
      </Row>
    </Card>
  );
};
export default CardProduct;
