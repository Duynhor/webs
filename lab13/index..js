let numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.log(typeof numbers);
console.log(numbers.length);

numbers.length = 10; // Thêm 5 vị trí trống
console.log(numbers);

console.log(numbers.indexOf(100));
// Thường mảng nên lưu các giá trị giống nhau

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}

for (const number of numbers) {
  console.log(number);
}

let obj = {
  0: "Ba",
  1: "Đăng",
  2: "Tuấn",
  length: 3,
};
console.log(obj);

Array.isArray(numbers);

console.log(numbers[1]);

const newArray = numbers.concat(["Ba", "Béo"]); // Ghép numbers và [Ba, Béo]

console.log(newArray);
console.log(numbers);

/**
 * TÌm vị trí (chỉ mục) của một giá trị trong mảng
 * Tìm theo thứ tự từ trái sang phải (từ đầu mảng đến cuối)
 */
console.log(numbers.indexOf(1000));

//1000 có trong numbers không?
console.log(numbers.includes(1000));

//Thêm vào cuối
numbers.push(1, 2, 3);
console.log(numbers);

// Thêm vào đầu ( hạn chế)
numbers.unshift(4, 5, 6);
console.log(numbers);

// Xóa phần tử ở cuối
const lastItem = numbers.pop();
console.log(lastItem);
console.log(numbers);

// Xóa phần tử ở đầu
const firstItem = numbers.shift();
console.log(firstItem);
console.log(numbers);

// Đảo ngược thứ tự 
numbers.reverse();

console.log(numbers)

//Sao chép mảng 
const firstThreeItem = numbers.slice(1,3);
console.log(firstThreeItem);

// Xóa hoặc chèn hoặc thay thế giá trị ở vị trí bất kỳ
// splice(start,number,...items)

// Xóa
numbers.splice(2,1);
console.log(numbers)

function doSomething(func) {
    func();
}

function test() {
    console.log("test")

}

let arr = [1, 2, 3, 4, 5];

function square(n) {
    console.log(n **2);
}

for (let value of arr) {
    square(value)
}

arr.forEach(square)

arr.forEach(console.log)
