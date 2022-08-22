function printOddNumbers(i) {
  for (let i = 1; i < 100; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
printOddNumbers();

function printEvenNumbers(i) {
  for (let i = 100; i >= 1; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printEvenNumbers();

function sumOfNumber(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumOfNumber(3));
