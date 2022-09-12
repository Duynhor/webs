// Cho mảng chứa danh sách các loại quả
const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>
const apple = document.createElement("li");
const banana = document.createElement("li");
const tomato = document.createElement("li");
const watermelon = document.createElement("li");
const strawberry = document.createElement("li");
const cherry = document.createElement("li");
const coconut = document.createElement("li");

const ul = document.querySelector("ul");
ul.appendChild(apple)
ul.appendChild(banana)
ul.appendChild(tomato)
ul.appendChild(watermelon)
ul.appendChild(strawberry)
ul.appendChild(cherry)
ul.appendChild(coconut)

apple.className = "apple";
document.querySelector(".apple").append(fruitList[0]);

banana.className = "banana";
document.querySelector(".banana").append(fruitList[1]);

tomato.className = "tomato";
document.querySelector(".tomato").append(fruitList[2]);

watermelon.className = "watermelon";
document.querySelector(".watermelon").append(fruitList[3]);

strawberry.className = "strawberry";
document.querySelector(".strawberry").append(fruitList[4]);

cherry.className = "cherry";
document.querySelector(".cherry").append(fruitList[5]);

coconut.className = "coconut";
document.querySelector(".coconut").append(fruitList[6]);
