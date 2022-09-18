// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// function highAndLow(numbers) {
//   let output = [];
//   let highest = numbers.split(" ").sort((a, b) => a - b).pop()
//   output.push(highest)
//   output.push(numbers.split(" ").sort((a, b) => a - b)[0])
//   return output.join('')
// }

// function highAndLow(numbers) {
//   const sortedNums = numbers.split(" ").sort((a, b) => a - b);
//   const highest = sortedNums[sortedNums.length - 1];
//   const lowest = sortedNums[0];
//   return `${highest} ${lowest}`;
// }

/// best (most efficient) solution
// function highAndLow(numbers) {
//   const numStrings = numbers.split(' ')

//   let highest = +numStrings[0];
//   let lowest = +numbers[0];

//   for(let i = 0; i < numStrings.length; i++) {
//     const currNum = +numStrings[i];

//     if (currNum > highest) {
//       highest = currNum
//     }

//     if (currNum < lowest) {
//       lowest = currNum
//     }
//   }

//   return `${highest} ${lowest}`
// }

const highAndLow = (s) =>
  s
    .split(" ")
    .sort((a, b) => b - a)
    .filter((_, i, { length: l }) => i === 0 || i === l - 1)
    .join(" ");

const highAndLow2 = (s) => {
  let numStringArr = s.split(" ");
  return `${Math.max(...numStringArr)} ${Math.min(...numStringArr)}`;
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow2("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
 