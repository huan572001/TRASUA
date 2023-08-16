import { useAuth } from "@/context/AuthProvider";
import {
  AreaChartOutlined,
  AuditOutlined,
  ContainerOutlined,
  DollarOutlined,
  ExceptionOutlined,
  GoldOutlined,
  HomeOutlined,
  ScheduleOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// import { Books, BellRing, Stack, User } from '@/assets';
const LayoutAdmin = [
  {
    label: "Quản lý sản phẩm",
    key: "AdminProduct",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Thống kê",
    key: "statistical",
    icon: <AreaChartOutlined />,
  },
  {
    label: "Quản lý nhân viên",
    key: "Staff",
    icon: <TeamOutlined />,
  },
  {
    label: "Quản lý khuyến mãi",
    key: "Promotion",
    icon: <DollarOutlined />,
  },
  {
    label: "Quản lý khách hàng",
    key: "CustomerAdmin",
    icon: <UserAddOutlined />,
  },
];
const LayoutStaff = [
  {
    label: "Quản lý đơn hàng",
    key: "ListOrder",
    icon: <ScheduleOutlined />,
  },
];
const LayoutIngredient = [
  {
    label: "Quản lý vật tư",
    key: "Ingredient",
    icon: <ContainerOutlined />,
  },
  {
    label: "Hóa đơn vật tư",
    key: "orderMaterials",
    icon: <ExceptionOutlined />,
  },
  {
    label: "Đơn vị vật tư",
    key: "Measure",
    icon: <GoldOutlined />,
  },
];
const Layout = [
  {
    label: "Thông tin cá nhân",
    key: "ProfileSaff",
    icon: <AuditOutlined />,
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
