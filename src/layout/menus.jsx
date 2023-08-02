import { useAuth } from "@/context/AuthProvider";
import {
  HomeOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// import { Books, BellRing, Stack, User } from '@/assets';
const LayoutAdmin = [
  {
    label: "Quản lý sản phâm",
    key: "AdminProduct",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Thống kê",
    key: "statistical",
    icon: <UserAddOutlined />,
  },
  {
    label: "Quản lý nhân viên",
    key: "Staff",
    icon: <UserAddOutlined />,
  },
  {
    label: "Quản lý khuyến mãi",
    key: "Promotion",
    icon: <UserAddOutlined />,
  },
];
const LayoutStaff = [
  {
    label: "Quản lý Order",
    key: "ListOrder",
    icon: <UserAddOutlined />,
  },
];
const LayoutIngredient = [
  {
    label: "Quản lý Vat tu",
    key: "Ingredient",
    icon: <UserAddOutlined />,
  },
  {
    label: "Hóa đơn vật tư",
    key: "orderMaterials",
    icon: <UserAddOutlined />,
  },
];
const Layout = [
  {
    label: "Dashboard",
    key: "Dashboard",
    icon: <HomeOutlined />,
  },
];

const Out = () => {
  const auth = useAuth();
  let R = null;
  if (auth?.user?.data?.roleId === 1) {
    R = [...Layout, ...LayoutAdmin];
  } else if (auth?.user?.data?.roleId === 2) {
    R = [...Layout, ...LayoutStaff];
  } else if (auth?.user?.data?.roleId === 3) {
    R = [...Layout, ...LayoutIngredient];
  }
  return R;
};
export default Out;
