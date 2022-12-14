// # Basic

// Khai báo một object `dog` mô tả về một con chó với các thông tin sau:

// -   `name`: Tên
// -   `age`: Tuổi
// -   `bread`: Giống chó
// -   `gender`: Giới tính
// -   `color`: Màu lông
// -   `legs`: Số chân
// -   `favorite food`: Thức ăn yêu thích

// Và các phương thức:

// -   `eat()`: In ra `console` thông báo theo mẫu `{name} is eating {favorite food}, yum yum...`
// -   `run()`: In ra `console` thông báo theo mẫu `{name} is running on {legs} legs...`
// -   `bark()`: In ra `console` thông báo theo mẫu `Woof woof woof ...`

const dog = {
  name: "minh",
  age: 5,
  bread: "poodle",
  gender: "Male",
  color: "yellow",
  legs: 2,
  "favorite food": "sh!t",

  eat() {
    console.log(
      dog.name + " is eating " + this["favorite food"] + " yum yum..."
    );
  },

  run() {
    console.log(dog.name + " is runnung on " + dog.legs + " of his legs");
  },

  bark() {
    console.log("Ò ó o");
  },
};

function dogSay(name) {
  for (let key in dog) {
    if (name == key) {
      return "Hi";
    }
  }
}

console.log(dogSay("age"));

console.log(dog);
dog.eat();
dog.run();
dog.bark();
dog.color = "Brown";
console.log(dog.color);
dog.age = dog.age + 2;
console.log(dog.age);

for (let key in dog) {
  console.log("Key:", key, "Value:", dog[key]);
}

dog.isCrazy = true;
console.log(dog);

dog.crazy = function () {
  if (this.isCrazy) {
    for (i = 0; i <= 5; i++) {
      this.run;
      this.bark;
    }
  } else {
    console.log("Maybe " + dog.name + " is not crazy!?");
  }
};

// In ra tất cả thuộc tính và giá trị tương ứng (không phải function) trong `dog` ↓ ↓ ↓ ↓
dog.crazy();
console.log(dog);

for (let key in dog) {
  if (typeof dog[key] != "function") {
    console.log("value", dog[key]);
  }
}

let copy = {};

for (let key in dog) {
  copy[key] = dog[key];
}

copy.name = "cocvn";

console.log(copy);
console.log(dog);

// Thực hiện các yêu cầu sau đây, với mỗi yêu cầu về thêm/sửa/xóa thông tin đều in ra `console` để xem kết quả:

// -   In `dog` ra `console`

// -   Viết câu lệnh để in `name` ra `console`

// -   Viết câu lệnh để in `favorite food` ra `console`

// -   Viết câu lệnh để thay đổi `color` thành `Brown`

// -   Viết câu lệnh để tăng `age` thêm `2` tuổi

// -   Viết câu lệnh gọi phương thức `eat()`

// -   Viết câu lệnh gọi phương thức `run()`

// -   Sử dụng vòng lặp để in ra tất cả _tên thuộc tính (key)_ ra `console`

// -   Sử dụng vòng lặp để in ra tất cả _giá trị (value)_ ra `console`

// -   Viết câu lệnh để thêm một thuộc tính `isCrazy` vào `dog` với giá trị boolean tùy ý

// -   Viết câu lệnh để thêm một phương thức `crazy()` vào `dog`, kiểm tra nếu `isCrazy` là `false` thì in ra theo mẫu `{name} is not crazy`, nếu `isCrazy` là `true` thì sử dụng vòng lặp để gọi 2 phương thức `run()` và `bark()` 5 lần (con chó bị điên), kết quả sẽ in ra `console` dạng `{name} is running on {legs} legs ... Woof woof woof ... {name} is running ... Woof woof woof`

// -   Viết câu lệnh đảo ngược giá trị của `isCrazy`

// -   Viết câu lệnh gọi phương thức `crazy()`

// -   Viết câu lệnh xóa `isCrazy` khỏi `dog`

// -   Viết câu lệnh gọi phương thức `crazy()`, chú ý kết quả in ra và comment lý do vì sao lại in ra như vậy

// -   Sử dụng vòng lặp để in ra tất cả thuộc tính và giá trị tương ứng (không phải phương thức) trong `dog` ra `console` (sử dụng `typeof` để kiểm tra kiểu) theo mẫu `{key} có giá trị là {value}`

// -   Viết câu lệnh khai báo một biến mới `clone` và gán giá trị của `dog` cho `clone`

// -   Viết câu lệnh chỉnh sửa `name` trong `clone` thành một tên khác bất kỳ

// -   Viết câu lệnh in `clone` và `dog` ra `console`, chú ý kết quả

// -   Viết câu lệnh khai báo một object mới `copy` rỗng `{}`

// -   Sử dụng vòng lặp để sao chép từng thuộc tính và giá trị (bao gồm cả phương thức) trong `dog` sang `copy`

// -   Viết câu lệnh chỉnh sửa `name` trong `copy` thành tên khác bất kỳ

// -   Viết câu lệnh in `copy` và `dog` ra `console`, chú ý kết quả
