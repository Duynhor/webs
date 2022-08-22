// Danh sách sinh viên và quốc gia tương ứng
// Tên sinh viên là key còn quốc gia là value
const guessList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

/**
 * Kiểm tra xem `name` có trong `guessList` hay không
 *
 * - Nếu có thì trả về chuỗi theo mẫu: `Hi! I'm [name], and I'm from [country]!`
 * - Nếu không có thì trả về chuỗi theo mẫu: `Hi! I'm guess.`
 *
 * @param {string} name Tên bất kỳ
 *
 * @return {string} Câu chào
 */
function greeting(name) {
  if (name in guessList) {
    return "Hi! I'm " + name + ", and I'm from " + ("value", guessList[name]);
  } else {
    return "Hi! I'm guess";
  }
}

console.log(greeting("Randy"));
console.log(greeting("Wendy"));
console.log(greeting("Duy"));

// Danh sách thành viên trong 1 gia đình
// Tên là key, tuổi là value
const myFamily = {
  Fred: 34,
  Susan: 32,
  Emily: 8,
  Tom: 5,
};

/**
 * Tính xem sau `n` năm nữa thì các thành viên trong gia đình bao nhiêu tuổi
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} obj Danh sách thành viên trong gia đình
 * @param {number} n Số năm bất kỳ
 *
 * @return {{[key: string]: number}} Danh sách thành viên và số tuổi tương ứng sau `n` năm
 */
function afterNYears(obj, n) {
  let myOlderFamily = {};
  for (let key in myFamily) {
    myOlderFamily[key] = myFamily[key];
  }
  if (obj in myOlderFamily) {
    console.log("value", myOlderFamily[obj] + n);
  }
}

console.log(afterNYears("Fred", 3));
console.log(afterNYears("Susan", 6));
console.log(afterNYears("Tom", 6));
console.log(myFamily);

/**
 * Đảo ngược key thành value, value thành key của một object bất kỳ
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{key: string}: any} obj Object bất kỳ
 *
 * @return {[key: string]: string} Object mới sau khi đảo ngược
 */

function invert(obj) {
  let copyObj = {};
  for (let key in obj) {
    copyObj[key] = obj[key];
  }
  for (let key in copyObj) console.log("Key:", copyObj[key], "Value:", key);
}

console.log(invert(myFamily));
console.log(invert(guessList));
// Danh sách items
// Key là tên, value là giá trị tương ứng
const items = {
  tv: 300,
  ipad: 1100,
};

/**
 * Tính tổng giá trị (value) các items trong object đầu vào
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {number} Tổng giá trị các items
 */
function totalAmount(items) {
  console.log(Object.values(items).reduce((a, b) => a + b, 0));
}

console.log(totalAmount(items));
/**
 * Lọc và trả về danh sách các items có giá trị cao (value >= 1000) trong danh sách đầu vào
 *
 * Lưu ý: Object ban đầu không được phép thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {{[key: string]: number}} Danh sách các items có giá trị cao
 */
function expensiveItems(items) {
  let newItem = {};
  for (let key in items) {
    newItem[key] = items[key];
  }

  for (let key in newItem) {
    (newItem[key] >= 1000) = true
    if (true){
      console.log(newItem[key])
    }
  }

}

console.log(expensiveItems(items));
console.log(expensiveItems(myFamily));

