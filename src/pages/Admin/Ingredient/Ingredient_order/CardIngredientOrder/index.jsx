import { Button, Card, Form, Input, Select } from "antd";

const CardIngredient = ({ setData }) => {
  const [form] = Form.useForm();
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    setData((e) => [...e, value]);
    form.resetFields();
  };

  return (
    <>
      <Card>
        <Form onFinish={handleChange} form={form}>
          <Form.Item
            label="sản phẩm"
            name="name"
            rules={[{ required: true, whitespace: true }, { max: 150 }]}
          >
            <Select
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Đơn vị"
            name="measure_id"
            rules={[{ required: true, whitespace: true }]}
          >
            <Select
              options={[
                {
                  value: "1",
                  label: "Kg",
                },
                {
                  value: "2",
                  label: "Lít",
                },
                {
                  value: "3",
                  label: "cái",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            style={{ marginRight: "24px" }}
            label="Giá nhập"
            name="price"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="sô lượng nhập"
            name="quantity"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="quantity">
            <Button htmlType="submit">Thêm</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default CardIngredient;
