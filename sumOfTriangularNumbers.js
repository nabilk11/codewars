// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript - 7 kyu

const triangular = (n) => {
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += i;
  }
  return number;
};

function sumTriangularNumbers(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = triangular(i) + total;
  }
  return total;
}
