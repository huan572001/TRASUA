const Util = (name) => {
  const array = {
    Login: "/auth/login",
    ListUser: "/ListUser",
    ListOrder: "/admin/ListOrder",
    AdminProduct: "/admin/ListProduct",
    CreateProduct: "/admin/createProduct",
    statistical: "/admin/statistical",
    Staff: "/admin/Staff",
    AddStaff: "/admin/AddStaff",
    EditStaff: "/admin/EditStaff",
    Promotion: "/admin/Promotion",
    AddPromotion: "/admin/Promotion/Add",

    Ingredient: "/admin/Ingredient",
    AddIngredient: "/admin/Ingredient/add",
    CreateIngredient: "/admin/CreateIngredient",
    orderMaterials: "/admin/orderMaterials",
    EditIngredient: "/admin/EditIngredient",

    LoginCustomer: "/Customer/login",
    Register: "/Customer/Register",
    ListProduct: "/",
    Payment: "/Payment",
    Cart: "/Cart",

    Admin: "/admin",
    Customer: "/Customer",
    OrderCustomer: "/Customer/OrderCustomer",
    Evaluate: "/Customer/Evaluate",
  };
  return array[name];
};
export default Util;
