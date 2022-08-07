let Name = "Duy";
let age = "19";

const birthday = "30/06/2003";

console.log(Name, age);

let number = 888;
let float = 123.456

console.log(number)

// javascript sử dụng phong cách camelCase cho tên biến, hàm

// Với hằng số -const- sử dụng UPPERCASE

// 3 giá trị đặc biệt trong kiểu số
console.log(Infinity);
console.log(-Infinity);
Name = "Duynhor"
let isOn = true;
let isOff = false;

// Hàm là cách thức tổ chức mã, cho phép đóng gói các đoạn mã và tái sử dụng nhiều lần, nhiều nơi,...

// function - keyword khai báo hàm
//  function - tên hàm
//  (who) - Tham số hàm (parameter) - đầu vào cho hàm
function hello (who) {
    console.log("Hello, " + who);
}

const gretting = function(who) {
    console.log("Hello, " + who);
}

const sum = function (a,b) {
    const result = a + b;

    return result;
}

const sumOf1and2 = sum(1,2)
console.log(sum(1,2))



const sub = function (a,b) {
    const result = a - b;

    return result;
}

const subO30and28 = sub(30,28)
console.log(sub(30,28))


const mul = function (a,b) {
    const result = a * b;

    return result;
}

const mulOf2and2 = mul(2,2)
console.log(mul(2,2))

// Với phép toán +, Nếu có 1 toán hạng là chuỗi => ưu tiên chuyển toán hạng còn lại sang chuỗi

// Với pháp toán khác nhau - * / %  **
// Tự động chuyển đổi tất cả dữ liệu khác sang số