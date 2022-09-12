console.log(document);
console.log(document.body); // thẻ body
console.log(document.title); // title
console.log(document.links); // chứa ất cả các thẻ a trên trang
console.log(document.images); // chưa tất cả thẻ img trên trang
console.log(document.forms); // chứa tất cả thẻ form trên trang

document.title = "Hello";

// querySelector => chỉ chọn 1 (tức là trả về tham chiếu trực tiếp)
// querySelectorAll => trả về toàn bộ (tức là 1 Nodelist)
const images = document.querySelectorAll(img);

console.log(images);
const h1 = document.querySelector("#heading");

// Concepts
// Node là gì
// Interface là gì
//Interface của document
// Interface của element
// Interface của các element cụ thể (img, button, input...)

//Cách tìm kiếm và duyệt DOM tree (querySelector và querySelectorAll)

console.log(h1.id);
console.log(h1.title);
console.log(h1.style);
console.log(d);

// Có thể tạo tất cả mọi thứ thông qua Javascipt
document.createElement(); // Tạo thẻ
document.createTextNode(); // Tạo #text
document.createAttribute(); // Tạo thuộc tính

// Tạo xong thì cần phải chèn bào cấu trúc HTML
document.querySelector().append(//tên thẻ); // trèn vào trong thẻ (cuối thẻ)
document.querySelector().prepend(//tên thẻ); // trèn vào trong thẻ (đầu thẻ)
document.querySelector().before(//tên thẻ); // trèn vào phía trc thẻ
document.querySelector().after(//tên thẻ); // trèn vào phía sau thẻ
const img = document.createElement("img"); // Tương tự thẻ <img> trong HTML
img.src = "";
img.alt = "";

img.insertAdjacentText(); // Chèn dạng chuỗi
img.insertAdjacentHTML(); // Chèn chuỗi HTML, tương tự innerHTML
img.insertAdjacentElement(); // Chèn node (được tạo)

// Chỉ có duy nhất 1 node ở trên trang
// Nếu nodde đã xuất hiện trong DOM, thì các phương thức chỉnh sửa sẽ chỉ thay đổi vị trí của node. chứ không chèn node mới

// Dùng innerHTML khi mà có sẵn cấu trúc HTML và không cần thay đổi, chỉnh sửa quá nhiều
document.getElementById("app").innerHTML =
  '<h2 class="heading" id = "heading" onclick = "updateUserInfo(123)" >Hello</h2>';

// Tạo các hàm, hàm này sẽ tạo 1 thẻ img
function createImage(src, alt) {
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;

  return img;

}

