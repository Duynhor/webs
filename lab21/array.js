let numbers = [1, 10, 15, 100];

const isEven = (number) => number % 2 == 0;

for (const number of numbers) {
  if (isEven(number)) {
    console.log(number);
    break;
  }
}

numbers.find(isEven);

// function declaration
function hello() {
  console.log("Hello");
}

//arrow function expression
//let hello = () =>

const doSomethingWithRandomNumber = (callback) => {
  const randomNumber = Math.floor(Math.random() * 1000);

  callback(randomNumber);
};

function myFunc(randomNumber) {
  console.log("Got:", randomNumber);
}

doSomethingWithRandomNumber(function (randomNumber) {
  console.log("Got: ", randomNumber);
});
// Hàm là các đối tượng hạng nhất ( first class)
// Hàm là một loại giá trị
// Có thể gán cho hàm một biến
// Hàm có thể là một giá trị trả về từ hàm khác:

// Call back
function doSomethingWithRandomNumber(callback) {
  serTimeout(() => {
    const random = Math.floor(Math.random() * 100);
  }, 3000);
}

doSomethingWithRandomNumber((random) => {
  console.log("Got: ", random);
});

let x;

abc(); // gán giá trị cho x

xyz();
// xyz( cần thao tác với giá trị x)
// Nhưng giá trị x thì được tính toán với abc()
// Bằng cách nào đó, mình phải cho xyz() chạy sau khi abc() ddowcj tính ra


// Promise
// Bất đồng bộ - chiếm 1 khoảng thời gian
console.log("Before send request");

fetch("https://fakestoreape.com/products");
console.log(" After send request").then()//sắp xếp trình tự;

// Xử lý data trả về
// Tạo cấu trúc DOM
// Hiển thị trên màn hình

