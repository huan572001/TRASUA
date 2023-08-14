import { useState } from "react";
import { Button, Col, Form, Input, Modal, Row, Select, Spin } from "antd";
import { useEffect } from "react";
import { getAllIngredient } from "../handal";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { StaffAPI } from "@/services/Admin/staff";
import { ProductAPI } from "@/services/Admin/product";
import { showError, showSuccess } from "@/components/AccountModal/Modal";

const { TextArea } = Input;

const EditProduct = () => {
  const [option, setOption] = useState([]);
  const [listVT, setListVT] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reci, setreci] = useState({});
  const [avatarPreview, setAvatarPreview] = useState(
    "https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg"
  );
  const navigate = useNavigate();
  const state = useLocation();
  const onFinish = (values) => {
    let data = [];
    let recipre = [];
    listVT.forEach((e) => {
      recipre.push({
        ingredient_id: e,
        quantity: values[e],
      });
    });
    data = { ...values, image: avatarPreview };
    setLoading(true);
    editProduct(state?.state?.id, data, recipre);
  };
  const handleChange = (value) => {
    setListVT(value);
  };
  useEffect(() => {
    setAvatarPreview(state?.state?.image);
    getAllIngredient(setOption);
    getRecipeById(state?.state?.id);
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
  const editProduct = async (id, data, recipre) => {
    try {
      console.log("ád");
      const a = await ProductAPI.editProduct(id, data);
      console.log("ád");
      const rq = await ProductAPI.editRecipe(id, { recipe: recipre });

      if (a?.success) {
        showSuccess("Chỉnh sửa sản phẩm thành công");
        navigate(routerLinks("AdminProduct"));
        setLoading(false);
      }
    } catch (error) {
      console.log("đasad");
      showError();
      setLoading(false);
    }
  };
  const getRecipeById = async (id) => {
    try {
      const rq = await ProductAPI.getRecipreById(id);
      if (rq?.success) {
        let arr = {};
        let VT = [];
        rq?.data?.forEach((e) => {
          arr[e?.ingredient?.id] = e?.quantity;
          VT.push(e?.ingredient?.id);
        });
        setListVT(VT);
        setreci(arr);
      }
    } catch (error) {}
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
  return (
    <>
      <Spin spinning={loading}>
        <h1>Chỉnh sửa sản phẩm</h1>
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
            style={{ width: "100%", height: "100%" }}
          />
          <input
            type="file"
            name="avatar"
            placeholder="ảnh"
            onChange={handleChangeIMG}
          />
        </div>
        {listVT?.length > 0 ? (
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              ...state?.state,
              ...reci,
            }}
          >
            <Row className="myRow">
              <Col span={11}>
                <Form.Item
                  style={{ marginRight: "24px" }}
                  label="Tên sản phẩm"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Username is required!",
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
                      message: "Username is required!",
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
                width: "100%",
              }}
              placeholder="Tags Mode"
              onChange={handleChange}
              options={formatOption()}
              defaultValue={[...listVT]}
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

            <Form.Item label="Mô tả" name="descript">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Tạo sản phẩm</Button>
            </Form.Item>
          </Form>
        ) : (
          ""
        )}
      </Spin>
    </>
  );
};

export default EditProduct;
