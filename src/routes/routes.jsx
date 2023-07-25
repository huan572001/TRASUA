import { DashboardOutlined } from "@ant-design/icons";
import React, { lazy } from "react";
import routerLinks from "@/utils/router-links";
import ListProduct from "@/pages/Customer/listProduct";
import Info from "@/pages/Customer/info";
import PrivateRoute from "./PrivateRoute";
import OrderCustomer from "@/pages/Customer/order";
export const routesAdmin = [
  {
    label: "List Order",
    path: routerLinks("CreateProduct"),
    component: React.lazy(() => import("@/pages/ListProduct/CreateProduct")),
  },
  {
    label: "List product",
    path: routerLinks("AdminProduct"),
    component: React.lazy(() => import("@/pages/ListProduct/index")),
  },
  {
    label: " statistical",
    path: routerLinks("statistical"),
    component: React.lazy(() => import("@/pages/Admin/statistical")),
  },
  {
    label: " statistical",
    path: routerLinks("Staff"),
    component: React.lazy(() => import("@/pages/Admin/staff")),
  },
];
export const routesUser = [
  {
    label: "payment",
    path: routerLinks("Payment"),
    component: React.lazy(() => import("@/pages/Customer/Payment")),
  },
  {
    label: "OrderCustomer",
    path: routerLinks("OrderCustomer"),
    component: React.lazy(() => import("@/pages/Customer/order")),
  },
];
export const routesStaff = [
  {
    label: "List Order",
    path: routerLinks("ListOrder"),
    component: React.lazy(() => import("@/pages/Order")),
  },
];
export const routesWarehouse = [
  {
    label: "List Ingredient",
    path: routerLinks("Ingredient"),
    component: React.lazy(() => import("@/pages/Admin/Ingredient")),
  },
  {
    label: "Add Ingredient",
    path: routerLinks("AddIngredient"),
    component: React.lazy(() =>
      import("@/pages/Admin/Ingredient/Ingredient_order")
    ),
  },
  {
    label: "Create Ingredient",
    path: routerLinks("CreateIngredient"),
    component: React.lazy(() =>
      import("@/pages/Admin/Ingredient/createIngredient")
    ),
  },
  {
    label: "Create Ingredient",
    path: routerLinks("orderMaterials"),
    component: React.lazy(() =>
      import("@/pages/Admin/Ingredient/orderMaterials")
    ),
  },
  {
    label: "Create Ingredient",
    path: routerLinks("EditIngredient"),
    component: React.lazy(() =>
      import("@/pages/Admin/Ingredient/editIngredient")
    ),
  },
];
const routes = [
  {
    label: "List cart",
    path: routerLinks("Cart"),
    component: React.lazy(() => import("@/pages/Customer/cart")),
  },
  {
    label: "List Product",
    path: routerLinks("ListProduct"),
    component: React.lazy(() => import("@/pages/Customer/listProduct")),
  },
];

export default routes;
