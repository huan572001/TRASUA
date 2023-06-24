import { showConfirmSuccess, showError } from '@/components/AccountModal/Modal';
import { keyUser } from '@/constant/auth';
import { IngrediantAPI } from '@/services/Admin/Ingredient';
import { Button, Form, Input } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import routerLinks from '@/utils/router-links';
const FormIngredient = () => {
  const auth = JSON.parse(localStorage.getItem(keyUser));
  const info = useLocation();
  const navigate = useNavigate();
  const onFinish = async (value) => {
    let data = {
      price: Number(value?.price),
      quantity: Number(value?.quantity),
      ingredient_id: info?.state?.id,
      staff_id: auth?.data?.id,
    };
    try {
      const req = await IngrediantAPI.addIngredientOrder(data);
      if (req?.success) {
        navigate(routerLinks('Ingredient'));
        showConfirmSuccess();
      }
    } catch (error) {
      showError();
    }
  };
  return (
    <div>
      <h1>Nhập vật tư</h1>
      <div>Tên Vật tư: {info?.state?.name}</div>
      <div>Đơn vị: {info?.state?.measure_id === 1 ? 'Kg' : 'Cái'} </div>
      <div>Số lượng tồn: {info?.state?.quantity}</div>
      <Form onFinish={onFinish}>
        <Form.Item
          style={{ marginRight: '24px' }}
          label="Giá nhập"
          name="price"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item label="sô lượng nhập" name="quantity">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="sô lượng nhập" name="quantity">
          <Button htmlType="submit">Nhập</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormIngredient;
