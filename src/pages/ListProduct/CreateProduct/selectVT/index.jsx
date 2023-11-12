import { useEffect, useState } from "react";
import { getAllIngredient } from "../../handal";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Select } from "antd";
import { ProductAPI } from "@/services/Admin/product";
import { Warning, showWarning } from "@/components/AccountModal/Modal";

const SelectVT = ({ listVT, setVT, setPriceRecipe, setNext }) => {
  const [option, setOption] = useState([]);
  let setTime = null;
  const [form] = Form.useForm();
  useEffect(() => {
    getAllIngredient(setOption);
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
  const getPriceRecepe = async (data) => {
    try {
      const rq = await ProductAPI.getPriceRecipe(data);
      if (rq?.success) {
        setVT(data);
        setPriceRecipe(rq?.data?.price);
        setNext();
      }
    } catch (error) {}
  };
  const onFinish = (values) => {
    if (values?.recipre?.length > 0) {
      getPriceRecepe(values?.recipre);
    } else {
      Warning("Không được để trống!");
    }
  };
  useEffect(() => {
    form.setFieldsValue({ recipre: listVT });
  }, [listVT]);
  return (
    <>
      <div className="text-center text-[#4658AC] text-2xl font-bold  leading-normal">
        Công thức sản phẩm
      </div>
      <Form name="dynamic_form_nest_item" onFinish={onFinish} form={form}>
        <Form.List name="recipre">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "ingredient_id"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing first name",
                      },
                    ]}
                    label="Nguyên liệu"
                    className="w-64"
                  >
                    <Select options={formatOption()} onChange={(e) => {}} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "quantity"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing last name",
                      },
                    ]}
                    label="Sô lượng"
                  >
                    <Input placeholder="Số lượng" type="number" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(name);
                      console.log(restField);
                    }}
                  />
                </Space>
              ))}
              <Form.Item className="w-full">
                <Button onClick={() => add()} block icon={<PlusOutlined />}>
                  Thêm nguyên liệu
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tiếp tục
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SelectVT;
