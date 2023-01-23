// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript - 7 kyu

const minSum = (arr) =>
  arr.sort((a, b) => a - b).reduce((prev, curr) => prev + curr * arr.pop(), 0);
