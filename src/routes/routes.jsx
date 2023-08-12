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
    label: "List Order",
    path: routerLinks("EditProduct"),
    component: React.lazy(() => import("@/pages/ListProduct/editProduct")),
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
  {
    label: " statistical",
    path: routerLinks("AddStaff"),
    component: React.lazy(() => import("@/pages/Admin/staff/CreateStaff")),
  },
  {
    label: " statistical",
    path: routerLinks("EditStaff"),
    component: React.lazy(() => import("@/pages/Admin/staff/EditStaff")),
  },
  {
    label: " statistical",
    path: routerLinks("Promotion"),
    component: React.lazy(() => import("@/pages/Admin/Promotion")),
  },
  {
    label: " statistical",
    path: routerLinks("AddPromotion"),
    component: React.lazy(() =>
      import("@/pages/Admin/Promotion/CreatePromotion")
    ),
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
  {
    label: "OrderCustomer",
    path: routerLinks("Evaluate"),
    component: React.lazy(() => import("@/pages/Customer/Evaluate")),
  },
  {
    label: "OrderCustomer",
    path: routerLinks("ProfileCustomer"),
    component: React.lazy(() => import("@/pages/Customer/profile")),
  },
];
export const routesStaff = [
  {
    label: "List Order",
    path: routerLinks("ListOrder"),
    component: React.lazy(() => import("@/pages/Order")),
  },
];
export const routesStaffAll = [
  {
    label: "Profile",
    path: routerLinks("ProfileSaff"),
    component: React.lazy(() => import("@/pages/Admin/Profile")),
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
      import("@/pages/Admin/Ingredient/editIngredient_Order")
    ),
  },
  {
    label: "Measure",
    path: routerLinks("Measure"),
    component: React.lazy(() => import("@/pages/Admin/measure")),
  },
  {
    label: "CreateMeasure",
    path: routerLinks("CreateMeasure"),
    component: React.lazy(() => import("@/pages/Admin/measure/createMeasure")),
  },
  {
    label: "EditMeasure",
    path: routerLinks("EditMeasure"),
    component: React.lazy(() => import("@/pages/Admin/measure/editMeasure")),
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
