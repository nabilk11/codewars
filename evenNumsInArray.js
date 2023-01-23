// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript - 7 kyu

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order).

function evenNumbers(array, number) {
  const evens = array.filter((el) => el % 2 === 0).reverse();
  return evens.slice(0, number).reverse();
}

// one line with better slice and no reverse - slice with negative numbers slices off the end

const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);
