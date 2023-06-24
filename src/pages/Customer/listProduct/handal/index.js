export const addProduct = (data, sl) => {
  let arrCard = [];
  let n = true;
  arrCard = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
  arrCard.forEach((element) => {
    if (element?.id === data?.id) {
      if (sl) {
        element.sl += sl;
      } else {
        element.sl += 1;
      }
      n = false;
    }
  });
  if (n) {
    arrCard.push({ ...data, sl: sl ? sl : 1 });
  }
  localStorage.setItem('cart', JSON.stringify(arrCard));
};
