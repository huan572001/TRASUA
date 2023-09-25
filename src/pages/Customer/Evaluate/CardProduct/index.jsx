import { Card, Col, Row } from "antd";
import { detailproduct } from "../../listProduct/detailProduct/ModalDetail";
import moment from "moment";

const CardProduct = ({ e, state }) => {
  return (
    <Card onClick={() => detailproduct(e)}>
      <Row>
        <Col span={5}>
          <img
            src={e?.image}
            style={{
              width: 80,
            }}
          />
        </Col>
        <Col span={5}>Tên: {e?.name}</Col>
        <Col span={5}>Giá: {e?.price}</Col>
        <Col span={5}>Số lượng: {e?.quantity}</Col>
        {e?.date !== null ? (
          <Col span={4}>
            Thời gian: {moment(new Date(e?.date)).format(" DD/MM/YYYY")}
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Card>
  );
};
export default CardProduct;
