import { useState } from 'react';
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useEffect } from 'react';
import { createProduct, getAllIngredient } from '../handal';
const { TextArea } = Input;

const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [listVT, setListVT] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState(
    'https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg'
  );
  const onFinish = (values) => {
    let data = [];
    let recipre = [];
    listVT.forEach((e) => {
      recipre.push({
        ingredient_id: e,
        quantity: values[e],
      });
    });
    data = { ...values, recipre, image: avatarPreview };
    createProduct(data);
  };
  const handleChange = (value) => {
    setListVT(value);
  };
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
  const getIngrediantByID = (id) => {
    let tmp = '';
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
  return (
    <>
      <h1>Thêm sản phẩm</h1>
      <div
        style={{
          width: 300,
          height: 300,
          marginBottom: 50,
        }}
      >
        <img
          src={avatarPreview}
          alt="Ảnh Sản Phẩm"
          style={{ width: '100%', height: '100%' }}
        />
        <input
          type="file"
          name="avatar"
          placeholder="ảnh"
          onChange={handleChangeIMG}
        />
      </div>
      <Form layout="vertical" onFinish={onFinish}>
        <Row className="myRow">
          <Col span={11}>
            <Form.Item
              style={{ marginRight: '24px' }}
              label="Tên sản phẩm"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Username is required!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={13}>
            <Form.Item
              label="Giá sản phẩm"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Username is required!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Select
          mode="tags"
          style={{
            width: '100%',
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
                      message: 'Username is required!',
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            );
          })}
        </Row>

        <Form.Item label="Mô tả" name="descript">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Tạo sản phẩm</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
