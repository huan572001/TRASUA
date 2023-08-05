/**
 * 获取一个字符串值在指定字符串第n次出现的位置
 */
export function getStrTimesIndex(str, cha, num) {
  let x = str.indexOf(cha);

  for (let i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }

  return x;
}

export function getFirstPathCode(path) {
  const index0 = getStrTimesIndex(path, "/", 0);
  const index1 = getStrTimesIndex(path, "/", 1);

  const activeKey = path.slice(index0 + 1, index1 > 0 ? index1 : path.length);

  return activeKey;
}
export const normalizeNumber = (value) => {
  if (!value) return null; // Trả về null nếu không có giá trị
  const numberValue = parseInt(value, 10); // Chuyển đổi giá trị thành số nguyên (hoặc parseFloat() nếu muốn số thập phân)
  return isNaN(numberValue) ? null : numberValue; // Kiểm tra xem giá trị có phải số hay không
};
