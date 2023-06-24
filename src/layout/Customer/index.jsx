import FooterCustomer from '@/layout/Customer/Footer';
import HeaderCustomer from '@/layout/Customer/Header';
import ListProduct from '@/pages/Customer/listProduct';
import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
const Customer = () => (
  <Layout>
    <HeaderCustomer />
    <Content
      className="site-layout"
      style={{
        padding: '15px 10%',
      }}
    >
      <Outlet />
      {/* <ListProduct /> */}
    </Content>
    <Footer>
      <FooterCustomer />
    </Footer>
  </Layout>
);
export default Customer;
