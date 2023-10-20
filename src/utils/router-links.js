const Util = (name) => {
  const array = {
    Login: "/auth/login",
    ListUser: "/ListUser",
    ListOrder: "/admin/ListOrder",
    ProfileSaff: "/admin/profile",
    AdminProduct: "/admin/ListProduct",
    CreateProduct: "/admin/createProduct",
    EditProduct: "/admin/EditProduct",
    statistical: "/admin/statistical",
    Staff: "/admin/Staff",
    AddStaff: "/admin/AddStaff",
    EditStaff: "/admin/EditStaff",
    Promotion: "/admin/Promotion",
    AddPromotion: "/admin/Promotion/Add",
    CustomerAdmin: "/admin/CustomerAdmin",

    Ingredient: "/admin/Ingredient",
    AddIngredient: "/admin/Ingredient/add",
    CreateIngredient: "/admin/CreateIngredient",
    orderMaterials: "/admin/orderMaterials",
    EditIngredient: "/admin/EditIngredient",
    Measure: "/admin/Measure",
    CreateMeasure: "/admin/CreateMeasure",
    EditMeasure: "/admin/EditMeasure",

    LoginCustomer: "/Customer/login",
    Register: "/Customer/Register",
    ListProduct: "/",
    Payment: "/Payment",
    Cart: "/Cart",
    ProfileCustomer: "/Customer/profile",
    ForgotPassWord: "/Customer/ForgotPassWord",
    PayMentDone: "/ThanhCong/:id",

    Admin: "/admin",
    Customer: "/Customer",
    OrderCustomer: "/Customer/OrderCustomer",
    Evaluate: "/Customer/Evaluate",
  };
  return array[name];
};
export default Util;
