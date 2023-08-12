import { useAuth } from "@/context/AuthProvider";
import LayoutPage from "@/layout";
import Login from "@/pages/Auth/Login";
import { useNavigate, useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes, {
  routesAdmin,
  routesUser,
  routesStaff,
  routesWarehouse,
  routesStaffAll,
} from "./routes";
import Customer from "@/layout/Customer";
import LoginCustomer from "@/pages/Customer/login";
import routerLinks from "@/utils/router-links";
import ListProduct from "@/pages/Customer/listProduct";
import Register from "@/pages/Customer/register";
const getPageRoute = (isAuthen) => {
  let R = null;
  if (isAuthen?.data) {
    R = [...routes, ...routesUser];
  } else {
    R = [...routes];
  }
  return R.map((route) => {
    const Comp = route?.component;
    return {
      path: route?.path,
      element: <PrivateRoute component={Comp} isAllowed={true} />,
    };
  });
};
const getPageRouteAdmin = (isAuthen) => {
  let R = [];
  if (isAuthen?.data?.roleId === 1) {
    R = [...routesAdmin, ...routesStaffAll];
  } else if (isAuthen?.data?.roleId === 2) {
    R = [...routesStaff, ...routesStaffAll];
  } else if (isAuthen?.data?.roleId === 3) {
    R = [...routesWarehouse, ...routesStaffAll];
  }
  return R.map((route) => {
    const Comp = route?.component;
    return {
      path: route?.path,
      element: <PrivateRoute component={Comp} isAllowed={true} />,
    };
  });
};
const RenderRoutes = (isAuthen) => {
  return [
    {
      path: routerLinks("Login"),
      element: <Login />,
    },
    {
      path: routerLinks("LoginCustomer"),
      element: <LoginCustomer />,
    },
    {
      path: routerLinks("Register"),
      element: <Register />,
    },
    {
      path: routerLinks("Admin"),
      element: <LayoutPage />,
      children: getPageRouteAdmin(isAuthen),
    },

    {
      path: "/",
      element: <Customer />,
      children: getPageRoute(isAuthen),
    },
  ];
};

const RouterApp = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const element = useRoutes(RenderRoutes(auth?.user));

  return element;
};

export default RouterApp;
