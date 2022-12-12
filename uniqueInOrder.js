// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript - 6 kyu

const uniqueInOrder = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1]) {
      output.push(input[i]);
    }
  }
  return output;
};

// filter method

const uniqueInOrder2 = (input) =>
  [...input].filter((el, idx) => el !== input[idx + 1]);
