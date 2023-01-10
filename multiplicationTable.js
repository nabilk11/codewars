// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript - 6 kyu

// create a multiplication table from the specific size and output as a 2D array

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// output ---> [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (size) => {
  let output = [];

  for (let i = 1; i <= size; i++) {
    const table = Array.from({ length: size }, (val, idx) => (idx + 1) * i);
    output.push(table);
  }
  return output;
};
