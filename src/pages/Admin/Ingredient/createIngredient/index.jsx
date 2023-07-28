import { Button, Card, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
const CreateIngredient = () => {
  const navigate = useNavigate();
  const onChange = (value) => {
    navigate(routerLinks("Ingredient"));
  };

  return (
    <>
      <Card title="Tạo vật tư">
        <Form onFinish={onChange}>
          <Form.Item
            name="name"
            rules={[{ required: true, whitespace: true }, { max: 150 }]}
          >
            <Input placeholder="Tên vật tư" />
          </Form.Item>
          <Form.Item name="medium" rules={[{ required: true }]}>
            <Select
              showSearch
              placeholder="đơn vị"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "kg",
                },
                {
                  value: "2",
                  label: "g",
                },
                {
                  value: "3",
                  label: "cai",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Tạo</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default CreateIngredient;
