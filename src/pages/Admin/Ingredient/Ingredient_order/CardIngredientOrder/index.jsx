import { IngrediantAPI } from "@/services/Admin/Ingredient";
import { normalizeNumber } from "@/utils/getFirstPathCode";
import { Button, Card, Form, Input, Select } from "antd";

const CardIngredient = ({ setData, ingredient, setIngredient }) => {
  const [form] = Form.useForm();

  const { Option } = Select;
  const handleChange = (value) => {
    const data = ingredient.find((item) => item?.id === value?.id);
    setData((e) => [
      ...e,
      { ...value, name: data?.name, measure_id: data["measure.name"] },
    ]);
    setIngredient((e) => {
      return e.filter((item) => item?.id !== value?.id);
    });
    form.resetFields();
  };

  return (
    <>
      <Card>
        <Form onFinish={handleChange} form={form}>
          <Form.Item
            label="Sản phẩm"
            name="id"
            rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Select>
              {ingredient?.map((item) => (
                <Option key={item?.id} value={item?.id}>
                  {item?.name} : {item["measure.name"]}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            style={{ marginRight: "24px" }}
            label="Giá nhập"
            name="price"
            rules={[{ required: true, message: "Không được để trống!" }]}
            normalize={normalizeNumber}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item
            label="Sô lượng nhập"
            name="qty"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
            normalize={normalizeNumber}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Thêm</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default CardIngredient;
