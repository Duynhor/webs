// Tìm kiếm ohaafn tử

// Luôn trả về 1 mảng
//$(selector);
//$(node);

// Các dối tượng jQuery thì thường có prefix $
const h1 = document.querySelector("h1");
const $h1 = $("h1,li");

console.log($h1);

const p = document.querySelector("p");

const $p = $(p);

console.log($p);

// Lấy nội dung, chỉnh sửa thuộc tính, nội dung, html
// Getter/ Setter

// textContent
console.log($p.text()); //get
$p.text("Xin chao"); //set

console.log(h1.id);
console.log(h1.getAttribute("id"));

console.log($h1.attr("id"));

$h1.attr({ id: "custom-heading", lang: "en" });

//innerHTML
const ul = document.querySelector("ul");

console.log(ul.innerHTML);

ul.innerHTML = "<li>Item1</li><li>Item</li>";

const $ul = $(ul);

console.log($ul.html()); // get

$ul.html("<li>Muc 1</li><li>Muc 2</li>");

// classList: add, remove, contains, toggle

console.log(ul.className);
ul.classList.add("list");

// addClass. removeClass, toggleClass, hasClass
$ul.addClass("my-list second-list abc");
$ul.removeClass("abc");
$ul.toggleClass("second-list");

// style
ul.style.backgroundColor = "orange ";

$ul.css({
  backgroundColor: "violet",
  color: "green",
});

// thêm, tạo, xóa, di chuyển các node

// innerHTML
ul.innerHTML += "<li>d</li>";

// appendTo,
// parent.append(child)

// child.appendTo(parent)

$ul.append("<li>Mục 4</li>", "<li>Mục 5</li>"); // có thể thêm nhiều thẻ một lúc

const items = ["Mục 6", "Mục 7", "Mục 8"];

$ul.append(items.map((i) => `<li>${i}</li>`));

// tạo
const $li = $("<li>Mục 9</li>");
$li.appendTo($ul);

$("<li />", {
  class: "special",
  text: " Mục 10",
}).appendTo($ul);

//utilities methodds: click, mousemove, keypress
// on \ off
const data = 1;

$ul.on("click", data, (eventObject) => {
  console.log(eventObject);
});
