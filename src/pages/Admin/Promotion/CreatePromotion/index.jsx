import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import moment from "moment";
import { async } from "q";
import { notAuthAPI } from "@/services/notAuth";
import { keyUser } from "@/constant/auth";
import { PromosionAPI } from "@/services/Admin/promotion";
import { showError, showSuccess } from "@/components/AccountModal/Modal";

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [listVT, setListVT] = useState([]);
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem(keyUser));
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(user);
    let data = {
      data: listVT,
      staff_id: user?.data?.id,
      percent: values.percent,
      start_day: new Date(values?.date[0]),
      end_day: new Date(values?.date[1]),
    };
    try {
      const rq = await PromosionAPI.createPromotion(data);
      if (rq?.success) {
        showSuccess("Tạo khuyến mãi thành công");
        navigate(routerLinks("Promotion"));
      }
    } catch (error) {
      showError();
    }
  };

  const onChangeDate = (value) => {
    console.log(value);
  };
  const handleChange = (value) => {
    setListVT(value);
  };
  const getListProduct = async () => {
    try {
      const req = await PromosionAPI.getAllPromosionHave();
      if (req?.success) {
        setProducts(req?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getListProduct();
    // getAllIngredient(setOption);
  }, []);
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
              name="percent"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input type="number" min={0} max={100} />
            </Form.Item>
          </Col>
          <Col span={13}>
            <Form.Item
              label="Thời gian khuyến mãi"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
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
        <Form.Item
          name={"đsads"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
        >
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            placeholder="Tags Mode"
            onChange={handleChange}
          >
            {products?.map((e, index) => {
              return (
                <Option key={index} value={e?.id}>
                  {e?.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Tạo sản phẩm</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
