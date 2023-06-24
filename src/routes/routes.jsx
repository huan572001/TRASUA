import { DashboardOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';
import routerLinks from '@/utils/router-links';
import ListProduct from '@/pages/Customer/listProduct';
export const routesAdmin = [
  {
    label: 'List Order',
    path: routerLinks('CreateProduct'),
    component: React.lazy(() => import('@/pages/ListProduct/CreateProduct')),
  },
  {
    label: 'List product',
    path: routerLinks('AdminProduct'),
    component: React.lazy(() => import('@/pages/ListProduct/index')),
  },
  {
    label: ' statistical',
    path: routerLinks('statistical'),
    component: React.lazy(() => import('@/pages/Admin/statistical')),
  },
];
export const routesUser = [
  {
    label: 'payment',
    path: routerLinks('Payment'),
    component: React.lazy(() => import('@/pages/Customer/Payment')),
  },
];
export const routesStaff = [
  {
    label: 'List Order',
    path: routerLinks('ListOrder'),
    component: React.lazy(() => import('@/pages/Order')),
  },
];
export const routesWarehouse = [
  {
    label: 'List Ingredient',
    path: routerLinks('Ingredient'),
    component: React.lazy(() => import('@/pages/Admin/Ingredient')),
  },
  {
    label: 'Add Ingredient',
    path: routerLinks('AddIngredient'),
    component: React.lazy(() =>
      import('@/pages/Admin/Ingredient/Ingredient_order')
    ),
  },
];
const routes = [
  {
    label: 'List cart',
    path: routerLinks('Cart'),
    component: React.lazy(() => import('@/pages/Customer/cart')),
  },
  {
    label: 'List Product',
    path: routerLinks('ListProduct'),
    component: React.lazy(() => import('@/pages/Customer/listProduct')),
  },
];

export default routes;
