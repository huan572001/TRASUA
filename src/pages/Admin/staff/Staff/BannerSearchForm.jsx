import { Button, Col, Form, Input, Row, Select } from "antd";
import "./Search.less";
const { Search } = Input;

const ColProps = {
  style: {
    marginBottom: 16,
  },
};

const TwoColProps = {
  ...ColProps,
};

const BannerSearchForm = ({ fetchRows, params, onReset }) => {
  const [form] = Form.useForm();

  const getFields = () => {
    return (
      <>
        <Row gutter={24}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="w-[288px] pr-6">
              <p style={{ fontWeight: "bold" }}>Tìm kiếm tên: </p>
              <div className="flex">
                <Form.Item name="titleBanner">
                  <Input
                    className="h-[44px] w-48 rounded-lg"
                    allowClear
                    // placeholder={t("banner:search.search")}
                  />
                </Form.Item>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Button
                    className="btn"
                    onClick={() => {
                      form.resetFields();
                      onReset();
                    }}
                    style={{
                      marginLeft: "24px",
                    }}
                  >
                    Đặt lại
                  </Button>

                  <Button
                    className="btn"
                    type="primary"
                    htmlType="submit"
                    style={{
                      marginLeft: "24px",
                    }}
                  >
                    Tìm kiếm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </>
    );
  };

  const onFinish = async (values) => {
    const titleBanner = values?.titleBanner ? values?.titleBanner : "";
    const typeBanner = values?.typeBanner ? values?.typeBanner : "";
    fetchRows({
      page: params.page,
      amount: params.amount,
      search: titleBanner,
      type: typeBanner,
      activate: "0",
    });
  };

  return (
    <Form
      form={form}
      name="banner_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      {getFields()}
    </Form>
  );
};

export default BannerSearchForm;
