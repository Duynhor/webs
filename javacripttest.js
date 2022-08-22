//Tính thể tích hình cầu
let pi = Math.PI;
function findVolumeOfSphere(R) {
  return (
    "Thể tích hình cầu có bán kính bằng " + R + " là " + (4 / 3) * pi * R ** 3
  );
}

console.log(findVolumeOfSphere(4));
console.log(findVolumeOfSphere(5));
console.log(findVolumeOfSphere(6));

//Tính tổng các số nguyên nằm giữa hai số nguyên bất kì
function mulBetweenRandomNumbers(a, b) {
  let total = 0;

  for (let i = a + 1; i < b; i++) {
    total += i;
  }
  return total;
}

console.log(mulBetweenRandomNumbers(2, 9));
console.log(mulBetweenRandomNumbers(1, 11));

//Tính tổng các ước số của 1 số nguyên dương bất kì
function mulOfDivisor(a) {
  let total = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      total += i;
    }
  }
  return total;
}

console.log(mulOfDivisor(3));
console.log(mulOfDivisor(6));
console.log(mulOfDivisor(12));

//Kiểm tra một số có phải số nguyên tố không
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i != 0 || n == 2) {
      return "True. " + n + " là số Nguyên tố";
    } else if (n % i == 0) {
      return "False. " + n + " không phải là số Nguyên tố";
    }
  }
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(8));

//Tính tổng các số Nguyên tố nhỏ hơn hoặc bằng số n > 0
function mulOfLesserPrimes(n) {
  let total = 0;
  for (let i = 2; i < n; i++)
    if (isPrime(i) == true) {
      total += i;
    }
  return total;
}

console.log(mulOfLesserPrimes(6));
console.log(mulOfLesserPrimes(3));
console.log(mulOfLesserPrimes(5));

//Viêt hoa chữ cái đầu
function uppercaseFirstword(str) {
  function uppercase(char) {
    return char.charAt(0).toUpperCase() + char.slice(1);
  }
  str.split(" ").map(uppercase);

  return str.split(" ").map(uppercase).join(" ");
}

console.log(uppercaseFirstword("xin chào"));
console.log(uppercaseFirstword("ở trong hang lâu quá rồi MU"));

//Tính tuổi trung bình của toàn bộ sinh viên
const ageOfStudents = {
  Duy: 19,
  Minh: 22,
  Nhật: 21,
  Dương: 18,
  Nguyên: 18,
  Khánh: 23,
};

console.log(
  Object.values(ageOfStudents).reduce((a, b) => a + b) /
    Object.keys(ageOfStudents).length
);

//Sắp xếp theo tuổi
let ageOfStudents2 = [
  { name: " Duy", age: 19 },
  { name: " Minh", age: 22 },
  { name: "Nguyên", age: 18 },
  { name: "Dương", age: 19 },
];

for (let key in ageOfStudents2) {
  ageOfStudents2.sort(function (student1, student2) {
    return student1.age - student2.age;
  });
}

console.log(ageOfStudents2);
