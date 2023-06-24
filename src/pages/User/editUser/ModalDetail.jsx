import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  TreeSelect,
} from 'antd';
import './ModalDetail.less';
import { useState } from 'react';
import moment from 'moment';
import { editUser } from '../handal';
const { TextArea } = Input;
const FormProduct = ({ info }) => {
  const [open, setOpen] = useState(true);
  const onFinish = (values) => {
    editUser(info?.id, values);
  };
  return (
    <>
      <div className="BodyBanner">
        <div className="imgBanner">
          {info?.image ? (
            <img style={{ maxWidth: '100%' }} src={info?.image} alt="logo" />
          ) : (
            <img
              style={{ maxWidth: '100%' }}
              src="https://png.pngtree.com/png-vector/20190811/ourlarge/pngtree-coorful-user-icon-on-gray-background-png-image_1690151.jpg"
              alt="logo"
            />
          )}
        </div>
        <Form
          layout="vertical"
          disabled={open}
          onFinish={onFinish}
          initialValues={{
            name: info?.name,
            garder: info?.garder,
            phone: info?.phone,
            email: info?.email,
            birthday: moment(info?.birthday),
          }}
        >
          <Row className="myRow">
            <Col span={11}>
              <Form.Item
                style={{ marginRight: '24px' }}
                label="Tên khách hàng"
                name="name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={13}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row className="myRow">
            <Col span={11}>
              <Form.Item
                style={{ marginRight: '24px' }}
                label="Giới tính"
                name="garder"
              >
                <TreeSelect
                  treeData={[
                    { value: true, label: 'Nam' },
                    { value: false, label: 'Nữ' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={13}>
              <Form.Item label="Ngày sinh" name="birthday">
                <DatePicker />
                {/* <Input /> */}
              </Form.Item>
            </Col>
          </Row>
          <Row className="myRow">
            <Col span={11}>
              <Form.Item
                style={{ marginRight: '24px' }}
                label="Số điện thoại"
                name="phone"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {open ? (
            <Button onClick={() => setOpen(false)} disabled={false}>
              Chỉnh sửa
            </Button>
          ) : (
            <>
              <Button onClick={() => setOpen(true)} disabled={false}>
                close
              </Button>
              <Button disabled={false} type="primary" htmlType="submit">
                Lưu
              </Button>
            </>
          )}
        </Form>
      </div>
    </>
  );
};
export const detailUser = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <FormProduct info={info} />,
    icon: null,
    closable: true,
    width: 568,
  });
};
