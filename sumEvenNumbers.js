// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript - 7 kyu

function sumEvenNumbers(input) {
  // [...]
  const evens = input.filter((el) => {
    if (el % 2 === 0) return el;
  });
  return evens.reduce((a, b) => a + b, 0);
}

const sumEvenNumbers2 = (input) =>
  input.filter((el) => (el % 2 === 0 ? el : 0)).reduce((a, b) => a + b, 0);
