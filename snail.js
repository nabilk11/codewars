// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript - 4 kyu



const snail = (arr) => {
  const coords = [];

  while (arr.length) {
    const firstRow = arr.shift();
    coords.push(firstRow);

    const rightSide = arr.map((row) => row.pop());
    coords.push(rightSide);

    const bottomRow = arr.pop() || [];
    const reversed = bottomRow.reverse();
    coords.push(reversed);

    const leftSide = arr.map((row) => row.shift()).reverse();
    coords.push(leftSide);
  }

  return coords.flat();
};

// initial solution

// const snail = (arr) => {
//   const coords = [];

//   while (arr.length) {
//     const firstRow = arr.shift();
//     coords.push(firstRow);

//     for (let i = 0; i < arr.length; i++) {
//       const currRow = arr[i];
//       const lastEl = currRow.pop();
//       coords.push(lastEl);
//     }

//     const bottomRow = arr.pop() || [];
//     const reversed = bottomRow.reverse();
//     coords.push(reversed);

//     for (let i = 0; i < arr.length; i++) {
//       const idx = arr.length - 1 - i;
//       coords.push(arr[idx].shift());
//     }
//   }

//   return coords.flat();
// };

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const case2 = [
  [1, 2, 3, 1],
  [4, 5, 6, 4],
  [7, 8, 9, 7],
  [7, 8, 9, 7],
];
console.log(snail(case2));
