// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript - 8 kyu

// 2 arrays with 3 ints - find cubic volume of each, and take the difference of the higher and lower

function findDifference(a, b) {
  const volA = a.reduce((a, b) => a * b);
  const volB = b.reduce((a, b) => a * b);
  return Math.abs(volA - volB);
}
