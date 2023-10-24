import { useState } from "react";
import { Button, Col, Form, Input, Modal, Row, Select, Spin } from "antd";
import { useEffect } from "react";
import { getAllIngredient } from "../handal";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import {
  showConfirmSuccess,
  showError,
  showSuccess,
} from "@/components/AccountModal/Modal";
import { ProductAPI } from "@/services/Admin/product";

const { TextArea } = Input;

const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [listVT, setListVT] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reci, setreci] = useState({});
  const [priceRecipe, setPriceRecipe] = useState(0);
  const [dataRecipe, setDataRecipe] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState(
    "https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg"
  );
  const state = useLocation();
  let setTime = null;
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    let data = [];
    let recipre = [];
    listVT.forEach((e) => {
      recipre.push({
        ingredient_id: e,
        quantity: values[e],
      });
    });
    data = { ...values, recipre, image: avatarPreview };
    setLoading(true);
    // if (state?.state?.id) {
    //   editProduct(state?.state?.id, data, recipre);
    // } else {
    //   createProduct(data, () => navigate(routerLinks("AdminProduct")));
    // }
  };
  const createProduct = async (data, load) => {
    try {
      const a = await ProductAPI.createProduct(data);
      if (a?.success) {
        showConfirmSuccess();
        load();
      } else {
        showError(a?.mgs);
      }
      setLoading(false);
    } catch (error) {
      showError();
      setLoading(false);
    }
  };
  const handleChange = (value) => {
    setListVT(value);
  };
  useEffect(() => {
    if (state?.state?.id) {
      getRecipeById(state?.state?.id);
      setAvatarPreview(state?.state?.image);
    }
    getAllIngredient(setOption);
  }, []);
  useEffect(() => {
    getPriceRecepe(dataRecipe);
  }, dataRecipe);
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
  const getRecipeById = async (id) => {
    try {
      const rq = await ProductAPI.getRecipreById(id);
      if (rq?.success) {
        let arr = {};
        let VT = [];
        let tmp = [];
        rq?.data?.forEach((e) => {
          arr[e?.ingredient?.id] = e?.quantity;
          VT.push(e?.ingredient?.id);
          tmp.push({
            id: e?.ingredient?.id,
            count: e?.quantity,
          });
        });
        setListVT(VT);
        setreci(arr);
        setDataRecipe(tmp);
      }
    } catch (error) {}
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
  const editProduct = async (id, data, recipre) => {
    try {
      const a = await ProductAPI.editProduct(id, data);

      const rq = await ProductAPI.editRecipe(id, { recipe: recipre });

      if (a?.success) {
        showSuccess("Chỉnh sửa sản phẩm thành công");
        navigate(routerLinks("AdminProduct"));
        setLoading(false);
      }
    } catch (error) {
      showError();
      setLoading(false);
    }
  };

  const getPriceRecepe = async (data) => {
    try {
      const rq = await ProductAPI.getPriceRecipe(data);
      if (rq?.success) {
        setPriceRecipe(rq?.data?.value);
      }
    } catch (error) {}
  };
  const FromProduct = () => {
    return (
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
                  message: "Không được để trống!",
                },
                {
                  whitespace: true,
                  message: "Không được để khoảng trắng!",
                },
                { max: 255, message: "chiều dài không vượt quá 255" },
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
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input type="number" min={0} />
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
          defaultValue={listVT}
        />

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
                <Input
                  type="number"
                  min={0}
                  onChange={(e) => {
                    if (setTime) {
                      clearTimeout(setTime);
                    }
                    setTime = setTimeout(() => {
                      let check = false;
                      for (let i = 0; i < dataRecipe?.length; i++) {
                        if (dataRecipe[i]?.id === child) {
                          dataRecipe[i] = {
                            id: dataRecipe[i]?.id,
                            count: e?.target?.value,
                          };
                          setDataRecipe([...dataRecipe]);
                          check = true;
                        }
                      }
                      if (check === false) {
                        setDataRecipe([
                          ...dataRecipe,
                          {
                            id: child,
                            count: e?.target?.value,
                          },
                        ]);
                      }
                    }, 1000);
                  }}
                />
              </Form.Item>
            </Col>
          );
        })}
        <div>Giá gốc:{priceRecipe ? priceRecipe : 0}Vnd</div>
        <Form.Item
          label="Mô tả"
          name="descript"
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
            {
              whitespace: true,
              message: "Không được để khoảng trắng!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Tạo sản phẩm</Button>
        </Form.Item>
      </Form>
    );
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
          style={{ width: "100%", height: "100%" }}
        />
        <input
          type="file"
          name="avatar"
          placeholder="ảnh"
          onChange={handleChangeIMG}
        />
      </div>
      <Spin spinning={loading}>
        {state?.state?.id ? (
          listVT?.length > 0 ? (
            <FromProduct />
          ) : (
            ""
          )
        ) : (
          <FromProduct />
        )}
      </Spin>
    </>
  );
};

export default CreateProduct;
