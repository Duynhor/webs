// Thay đổi nội dung thẻ title,h1 bằng giá trị của thẻ heading
document.title = heading;
var headingNodes = document.querySelector(".heading");
headingNodes.innerText = heading;

//thay đổi src của thẻ img thành giá trị của thẻ avatar
var image = document.querySelector("img");
image.src = avatar;

var link = document.querySelector("link");
link.href = profile;

var li = document.querySelectorAll("li");
var fLi = li.item(0);
fLi.innerText = "Code application";
var fourthLi = li.item(3);
fourthLi.innerText = "Sleep";

var time = document.querySelector(".clock");
var date = new Date();
var getTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
var getDay = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
time.innerHTML = 'Bây giờ là ' + getTime + ' ngày ' + getDay;

var tbodyRef = document
  .querySelector('.list-students')
  .getElementsByTagName("tbody")[0];

// thêm một hàng mới vào table
var newRow = tbodyRef.insertRow();

// thêm ô vào hàng
var newCell = newRow.insertCell();

var newText = document.createTextNode("Thầy giáo Ba siêu cấp đẹp trai");
newCell.appendChild(newText);
