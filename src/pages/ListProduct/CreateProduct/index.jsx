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
import SelectVT from "./selectVT";

const { TextArea } = Input;

const CreateProduct = () => {
  const [next, setNext] = useState(true);
  const [listVT, setListVT] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceRecipe, setPriceRecipe] = useState(0);
  const [dataRecipe, setDataRecipe] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState();
  const state = useLocation();
  const navigate = useNavigate();
  const onFinish = (values) => {
    let data = [];
    data = { ...values, recipre: [...listVT], image: avatarPreview };
    createProduct(data);
  };
  const createProduct = async (data) => {
    try {
      setLoading(true);
      let a;
      if (state?.state?.id) {
        a = await ProductAPI.editProduct(state?.state?.id, data);
        const rq = await ProductAPI.editRecipe(state?.state?.id, {
          recipe: data?.recipre,
        });
      } else {
        a = await ProductAPI.createProduct(data);
      }
      if (a?.success) {
        navigate(routerLinks("AdminProduct"));
        showConfirmSuccess();
      } else {
        showError(a?.mgs);
      }
      setLoading(false);
    } catch (error) {
      showError();
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state?.state?.id) {
      getRecipeById(state?.state?.id);
      setAvatarPreview(state?.state?.image);
    }
  }, []);
  useEffect(() => {
    getPriceRecepe(dataRecipe);
  }, dataRecipe);

  const getRecipeById = async (id) => {
    try {
      const rq = await ProductAPI.getRecipreById(id);
      if (rq?.success) {
        let VT = [];
        let tmp = [];
        rq?.data?.forEach((e) => {
          VT.push({
            ingredient_id: e?.ingredient?.id,
            quantity: e?.quantity,
          });
          tmp.push({
            id: e?.ingredient?.id,
            count: e?.quantity,
          });
        });
        setListVT(VT);
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
        }}
      >
        <Row className="myRow">
          <Col span={10}>
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
          <Col span={10}>
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
          <Col span={4}>
            <div>Giá gốc sản phẩm</div>
            <div className="text-red-600 font-extrabold">{priceRecipe} VND</div>
          </Col>
        </Row>
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
          <Button htmlType="submit">
            {state?.state?.id ? "Chỉnh sửa" : "Tạo sản phẩm"}
          </Button>
        </Form.Item>
        <Button onClick={() => setNext(true)}>Trở lại</Button>
      </Form>
    );
  };
  return (
    <>
      <h1>Thêm sản phẩm</h1>

      {next ? (
        <>
          <SelectVT
            listVT={listVT}
            setVT={setListVT}
            setPriceRecipe={setPriceRecipe}
            setNext={() => setNext(false)}
          />
        </>
      ) : (
        <Spin spinning={loading}>
          <div className="text-center text-[#4658AC] text-2xl font-bold  leading-normal">
            Thông tin sản phẩm
          </div>
          <div
            style={{
              width: 300,
              height: 300,
              marginBottom: 50,
            }}
          >
            <img
              src={
                avatarPreview
                  ? avatarPreview
                  : "https://icon-library.com/images/facebook-loading-icon/facebook-loading-icon-15.jpg"
              }
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
      )}
    </>
  );
};

export default CreateProduct;
