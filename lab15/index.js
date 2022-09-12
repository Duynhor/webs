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
const h1 = document.querySelector("#heading")

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
console.log(d)
