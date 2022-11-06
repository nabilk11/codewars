// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript - 8 kyu
// take the average of an array of ints - rounded down to the nearest int
// Math.floor => round down
// Math.ceil => round up

const getAverage = (marks) => {
  let sum = marks.reduce((a, b) => a + b, 0);
  return Math.floor(sum / marks.length)
};
