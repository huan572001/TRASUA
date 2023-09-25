import { showConfirmSuccess, showError } from "@/components/AccountModal/Modal";
import { keyUser } from "@/constant/auth";
import { CustomerAPI } from "@/services/Customer";
import { Button, Card, Form, Rate } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { values } from "lodash";
import { useState } from "react";

const FormEvaluate = ({ setOpen, data, setLoadAPI }) => {
  const [form] = Form.useForm();
  const [avatarPreview, setAvatarPreview] = useState(
    "https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg"
  );
  const user = JSON.parse(localStorage.getItem(keyUser));
  const handleChangeIMG = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const createEvalute = async (data) => {
    try {
      const rq = await CustomerAPI.craeteEvaluateByUser(data);
      if (rq?.success) {
        showConfirmSuccess();
        setAvatarPreview(
          "https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg"
        );
        form.resetFields();
        setOpen(false);
        setLoadAPI((e) => (e += 1));
      }
    } catch (error) {
      showError();
    }
  };
  const onFinish = (values) => {
    const data2 = {
      ...values,
      img: avatarPreview,
      product_id: data?.product_id,
      id_orderitem: data?.id,
      customer_id: user.data?.id,
    };
    createEvalute(data2);
  };
  console.log(data);
  return (
    <>
      <div
        className="absolute z-50"
        style={{ width: "-webkit-fill-available" }}
      >
        <div className="flex justify-center">
          <Card className="w-2/4">
            <div className="flex justify-between">
              <h1>Đánh giá</h1>
              <div
                className="text-xl text-red-600 "
                onClick={() => setOpen(false)}
              >
                X
              </div>
            </div>

            <div
              style={{
                width: 200,
                height: 200,
                marginBottom: 50,
              }}
            >
              <img
                src={avatarPreview}
                alt="Ảnh Sản Phẩm"
                style={{ width: "100%", height: "100%" }}
              />
              <input
                type="file"
                name="avatar"
                placeholder="ảnh"
                onChange={handleChangeIMG}
              />
            </div>

            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="start"
                rules={[
                  {
                    required: true,
                    message: "không được để trống!",
                  },
                ]}
              >
                <Rate allowHalf defaultValue={5} />
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="comment"
                rules={[
                  {
                    required: true,
                    message: "không được để trống!",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Lưu</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};
export default FormEvaluate;
