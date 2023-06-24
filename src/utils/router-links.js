const Util = (name) => {
  const array = {
    Login: '/auth/login',
    ListUser: '/ListUser',
    ListOrder: '/admin/ListOrder',
    AdminProduct: '/admin/ListProduct',
    CreateProduct: '/admin/createProduct',
    Ingredient: '/admin/Ingredient',
    AddIngredient: '/admin/Ingredient/add',
    statistical: '/admin/statistical',

    LoginCustomer: '/Customer/login',
    ListProduct: '/',
    Payment: '/Payment',
    Cart: '/Cart',

    Admin: '/admin',
  };
  return array[name];
};
export default Util;
