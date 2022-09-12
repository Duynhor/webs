let number = 0;
const plus = document.querySelector(".prevBtn");
const minus = document.querySelector(".nextBtn");
const counter = document.getElementById("counter");
plus.onclick = function () {
  number -= 1;
  document.getElementById("counter").innerHTML = number;
  return number;
};

minus.onclick = function () {
  number += 1;
  document.getElementById("counter").innerHTML = number;
  return number;
};
