// cấu trúc rẽ nhánh
// if else
// switch case

//  Cấu trúc lặp
// for, for in, for of
// while 
// do while

//  Xử lý lỗi
//  try catch

let currentYear = 2022;

if (currentYear == 2022) {
    console.log("Năm nay là năm  con Hổ")
}
else {
    console.log("Năm nay không phải năm con Hổ")
}

// phân biệt else if
let isHoliday = false;
let isWeekend = false;

if (isHoliday) {
    console.log("abcxyz")
} else if (isWeekend) {
    console.log("xxx")
}
else {
    console.log('nothing left')
}

function isValidTriangle(a, b, c) {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return true
    }
    else {
        return false
    }
}
console.log(isValidTriangle(3, 4, 5))
console.log(isValidTriangle(2 ,3, 5))

function isAlphabet(character) {
    if ("a" <= character && "z" >= character) {
        return true
    } else if ("A" <= character && "Z" >= character) {
        return true
    } else {
        return false
    }
}

function simpleCalculator(operand1, operator, operand2) {
    if (operator == "+") {
        const result = operand1 + operand2;
        return (operand1 + "+" + operand2 + "=" + result)
    } else if (operator == "-") {
        const result = operand1 - operand2;
        return (operand1 + "-" + operand2 + "=" + result)
    }
}

console.log(simpleCalculator(2 + 2))

switch (value) {
    case case1: {

        // break; thay thế bằng return
    }

}


// let var = condition ? value 1 : (condition ? ) value 2;