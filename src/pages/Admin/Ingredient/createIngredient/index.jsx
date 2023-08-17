import { Button, Card, Form, Input, Select, Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { useEffect, useState } from "react";
import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { MeasureAPI } from "@/services/Admin/measure";
const CreateIngredient = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const [loading, setLoading] = useState(false);
  const [measure, setMeasure] = useState([]);
  const { Option } = Select;
  console.log(state);
  const getAllMeasure = async () => {
    try {
      const rq = await MeasureAPI.getAllMeasure();
      if (rq?.success) {
        setMeasure(rq?.data);
      }
    } catch (error) {}
  };
  const create = async (data) => {
    try {
      const rq = await IngrediantAPI.crateIngredient(data);
      if (rq?.success) {
        showConfirmSuccess();
        navigate(routerLinks("Ingredient"));
      } else {
        showError(rq?.msg);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      showError();
      setLoading(false);
    }
  };
  const update = async (data) => {
    try {
      const rq = await IngrediantAPI.editIngredient({
        ...data,
        id: state?.state?.id,
      });
      if (rq?.success) {
        showConfirmSuccess();
        navigate(routerLinks("Ingredient"));
      } else {
        showError(rq?.msg);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showError();
    }
  };
  useEffect(() => {
    getAllMeasure();
  }, []);
  const onChange = (value) => {
    setLoading(true);
    if (state?.state === null) {
      create(value);
    } else {
      update(value);
    }
  };
  return (
    <Spin spinning={loading}>
      <Card title={state?.state === null ? "Tạo vật tư" : "Chỉnh sửa vật tư"}>
        <Form
          onFinish={onChange}
          initialValues={{
            name: state?.state?.name,
            measure_id: state?.state?.measure_id,
          }}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,

                message: "Không được để trống!",
              },
              { whitespace: true, message: "Không được để khoảng trắng!" },
              { max: 150, message: "chiều dài không vượt quá 150" },
            ]}
          >
            <Input placeholder="Tên vật tư" />
          </Form.Item>
          <Form.Item
            name="measure_id"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Select
              showSearch
              placeholder="Đơn vị"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              {measure?.map((item) => (
                <Option key={item?.id} value={item?.id}>
                  {item?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Tạo</Button>
          </Form.Item>
        </Form>
      </Card>
    </Spin>
  );
};
export default CreateIngredient;
