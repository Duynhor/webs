let arr = [1, 2, 3, 4, 5];

function isEven(n) {
  return n % 2 == 0;
}

//VÒng lặp
let result;

for (const number of arr) {
  if (isEven(number)) {
    result = number;
    break;
  }
}

console.log(result);

//find () → Tìm đối tượng đầu tiên đúng
let n = arr.find(isEven);
console.log(n);

//Vòng lặp
let numbers = [];

for (const number of arr) {
  if (isEven(number)) {
    numbers.push(number);
  }
}

console.log(numbers);

//filer() → Tìm tất cả đối tượng đúng với yêu cầu
let Array = [3, 4, 5, 6, 6, 7, 8, 9];

let a = Array.filter(function (value) {
  return value % 3 == 0;
});

console.log(a);

//map () → biến đổi cả hàm
const r = arr.map(function (n) {
  return n ** 2;
});

console.log(r);

//Vòng lặp

function add(a, b) {
  return a + b;
}

let sum = 0; //Biến tích lũy, giá trị ban đầu = 0

for (const number of arr) {
  sum = add(sum, number);
}

console.log(sum);

//reduce

let total = arr.reduce(add, 0);
console.log(total);

let arr2 = [6, 3, 6, 8, 3, 9, 6];
// sort() - sắp xếp

// Mặc định sort() sắp xếp các giá trị theo dạng chuỗi

function compareNumber(a, b) {
  return a - b;
}

arr2.sort(compareNumber);

console.log(arr2);

let users = [
  { name: " Ba", age: 30 },
  { name: " Tuấn", age: 23 },
  { name: "Đăng", age: 18 },
  { name: " Phi", age: 25 },
];

users.sort(function (user1, user2) {
  return user1.age - user2.age;
});

console.log(users);
for (let key in users) {
  users.sort(function (user1, user2) {
    return user1.name > user2.name ? 1 : -1;
  });
}

console.log(users);

console.log(Date);
