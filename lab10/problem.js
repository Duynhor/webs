// Tìm số lớn nhất trong ba số

function maxOfThree(a, b, c) {
  if (a >= b && a > c) {
    return a;
  } else if (b >= a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(8, 30, 22));
console.log(maxOfThree(3, 3, 2));
console.log(maxOfThree(3, 2, 3));

// Tìm mùa tương ứng với tháng
function findSeason(month) {
  switch (month) {
    case 1:
    case 12:
    case 2:
      return "Winter";
      break;

    case 7:
    case 6:
    case 8:
      return "Summer";
      break;

    case 9:
    case 10:
    case 11:
      return "Autumn";
      break;

    case 3:
    case 4:
    case 5:
      return "Sping";
  }
}

console.log(findSeason(7));
console.log(findSeason(9));
console.log(findSeason(12));
console.log(findSeason(4));

// Kiểm tra có phải năm nhuận ko?
function isLeafYear(year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return "năm " + year + " là năm nhuận";
    } else if (year % 4 == 0) {
      return "năm " + year + "không phải năm nhuận";
    }
  } else if (year % 4 == 0 && year % 100 != 0) {
    return "năm " + year + " là năm nhuận";
  } else {
    return "năm " + year + " không phải là năm nhuận";
  }
}

console.log(isLeafYear(2021));
console.log(isLeafYear(2008));
console.log(isLeafYear(2400));
console.log(isLeafYear(344));
console.log(isLeafYear(2022));

// Tìm số ngày trong tháng
function findDayOfMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return "tháng " + month + " năm " + year + " có 31 ngày";
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      return "tháng " + month + " năm " + year + " có 30 ngày";
      break;
  }

  if (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 4 == 0 && year % 100 == 0 && month == 2)
  ) {
    return "tháng 2 năm " + year + " có 29 ngày";
  } else {
    return "tháng 2 năm " + year + " có 28 ngày";
  }
}

console.log(findDayOfMonth(7, 2022));
console.log(findDayOfMonth(6, 2022));
console.log(findDayOfMonth(2, 2022));
console.log(findDayOfMonth(2, 2400));

// Xếp loại sinh viên
function calcGrade(point) {
  if (1 <= point && point <= 2) {
    return "F";
  } else if (2 < point && point <= 4) {
    return "D";
  } else if (4 < point && point <= 6) {
    return "C";
  } else if (6 < point && point <= 8) {
    return "B";
  } else if (8 < point && point <= 10) {
    return "A";
  }
}

console.log(calcGrade(8));
console.log(calcGrade(5));
console.log(calcGrade(10));

// Tính số tiền taxi

function calcTaxiFee(km) {
  let duoi31Km = km * 11000 + 10000;
  if (km <= 30) {
    return "Quãng đường đã đi: " + km + "km" + "; Giá cước: " + duoi31Km + "đ";
  } else if (km > 30) {
    return (
      "Quãng đường đã đi: " +
      km +
      "km" +
      "; Giá cước: " +
      (340000 + (km - 30) * 9500) +
      "đ"
    );
  }
}

console.log(calcTaxiFee(30));
console.log(calcTaxiFee(32));
console.log(calcTaxiFee(0));
