// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript - 8 kyu
// return the remainder of the larger / smaller; if division by 0 return NaN

// sorting an array
function remainder(n, m) {
  let sortedNumArr = [n, m].sort((a, b) => a - b);
  return sortedNumArr[0] !== 0 ? sortedNumArr[1] % sortedNumArr[0] : NaN;
}

// above solution is not needed, modulus 0 already equals NaN
const remainder2 = (a, b) => {
  return a > b ? a % b : b % a;
};

// using Math.min/Math.max functions
const remainder3 = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return max % min;
};
