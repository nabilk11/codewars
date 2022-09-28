// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript - 6kyu
// given an array of nums, sort the odd nums, and leave the evens in place

// pseudo - create an odd array, sort it, map through original array, if odd replace it with first item, else leave it

function sortArray(array) {
  let oddArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);

  array.map((item, idx, arr) => {
    if (item % 2 !== 0) {
      arr[idx] = oddArr.shift();
    } else {
      arr[idx] = item;
    }
  });
  return array;
}

function sortArray2(array) {
  const sortedOddArr = array
    .filter((item) => item % 2)
    .sort((a, b) => a - b);
  return array.map((item) =>
    item % 2 ? sortedOddArr.shift() : item
  );
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
console.log(sortArray2([1, 11, 2, 8, 3, 4, 5]));
