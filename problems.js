const sum = function (a, b) {
  const result = a + b;

  return result;
};

const sumOf1and2 = sum(1, 2);
console.log(sum(1, 2));

// Tính Chu vi Hình Chữ Nhật
const findPerimeterOfRectangle = function (length, breadth) {
  const result = (length + breadth) * 2;

  return result;
};

console.log(findPerimeterOfRectangle(3, 4));

// Tính Diện tích Hình Chữ Nhật
const findAreaOfRectangle = function (length, breadth) {
  const result = length * breadth;

  return result;
};

console.log(findAreaOfRectangle(5, 6));

// Tính Đường kính Hình Tròn
const findDiameterOfCircle = function (R) {
  const result = R * 2;

  return result;
};

console.log(findDiameterOfCircle(8));

// Tính Chu vi Hình Tròn
const Pi = Math.PI;
const findCircumferenceOfCircle = function (R) {
  const result = R * 2 * Pi;

  return result;
};

console.log(findCircumferenceOfCircle(4));

//
