// https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript - 7 kyu

// Array series #4

const nthSmallest = (arr, pos) => {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[pos - 1];
};



