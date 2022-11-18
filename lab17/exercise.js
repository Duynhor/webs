const h1 = document.getElementById("heading");
const $h1 = $(h1);

$h1.css({
  color: "red",
});
$h1.text($h1.text().toUpperCase())

const $para = $(".para")

$para.css ({
   color: "blue",
   "font-size": "20px"
})

const $para3 = $(".para-3")

$("<a href = 'https://www.facebook.com/'>Facebook</a>").insertAfter($para3);

$(#title)