// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript - 7 kyu

// convert an array of 1s and 0s to a number

// convert a binary to a number ---> parseInt(binary, 2)

// examples
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9

const binaryArrayToNumber = (arr) => {
  const binary = +arr.join("");
  return parseInt(binary, 2);
};
