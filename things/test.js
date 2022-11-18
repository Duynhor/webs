const items = {
  tv: 300,
  ipad: 1100,
};

function totalAmount(items) {
  console.log(Object.values(items).reduce((a, b) => a + b, 0));
}

console.log(totalAmount(items));
