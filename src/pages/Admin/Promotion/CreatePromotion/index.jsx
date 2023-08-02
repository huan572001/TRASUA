import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import moment from "moment";

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [listVT, setListVT] = useState([]);

  const navigate = useNavigate();
  const onFinish = (values) => {
    // let data = [];
    // let recipre = [];
    // listVT.forEach((e) => {
    //   recipre.push({
    //     ingredient_id: e,
    //     quantity: values[e],
    //   });
    // });
    // data = { ...values, recipre, image: avatarPreview };
  };

  const onChangeDate = (value) => {
    console.log(value);
  };
  const handleChange = (value) => {
    setListVT(value);
  };
  useEffect(() => {
    // getAllIngredient(setOption);
  }, []);
  const formatOption = () => {
    let tmp = [];
    option.forEach((e) => {
      tmp.push({
        value: e?.id,
        label: e?.name,
      });
    });
    return tmp;
  };
  const getIngrediantByID = (id) => {
    let tmp = "";
    option.forEach((e) => {
      if (e?.id === id) {
        tmp = e?.name;
      }
    });
    return tmp;
  };
  const handleChangeIMG = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const disabledDate = (current) => {
    // Cho phép chọn các ngày trong quá khứ
    return current && current <= moment().endOf("day");
  };
  return (
    <>
      <h1>Tạo khuyến mãi</h1>

      <Form layout="vertical" onFinish={onFinish}>
        <Row className="myRow">
          <Col span={11}>
            <Form.Item
              style={{ marginRight: "24px" }}
              label="Phần trăm giảm"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                },
              ]}
            >
              <Input type="number" min={0} max={100} />
            </Form.Item>
          </Col>
          <Col span={13}>
            <Form.Item
              label="Thời gian khuyến mãi"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                },
              ]}
            >
              <RangePicker
                onChange={onChangeDate}
                disabledDate={disabledDate}
              />
            </Form.Item>
          </Col>
        </Row>
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Tags Mode"
          onChange={handleChange}
          options={formatOption()}
        />
        <Row>
          {listVT.map((child, index) => {
            return (
              <Col key={index} span={6}>
                <Form.Item
                  label={getIngrediantByID(child)}
                  name={`${child}`}
                  rules={[
                    {
                      required: true,
                      message: "Username is required!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            );
          })}
        </Row>

        <Form.Item>
          <Button htmlType="submit">Tạo sản phẩm</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
