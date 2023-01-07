// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript - 7 kyu

// given an array of ints, return an array with the min value, and the max value with the lowest number not included in the array as the middle element of the output

// examples
// minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

// spread a new Set from array to get all uniq values
// loop through it to find the minimum absent value
// return the min, absent, and max

function minMinMax(array) {
  let absentVal = 0;
  let sorted = [...new Set(array.sort((a, b) => a - b))];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] !== sorted[i] + 1) {
      absentVal = sorted[i] + 1;
      break;
    }
  }
  return [sorted[0], absentVal, sorted[sorted.length - 1]];
}

// alternative solution
// using a while loop and includes method
// set the absent value to the min and increase it by one until it is not found in the array
const minMinMax2 = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let absentVal = Math.min(...arr);

  while (arr.includes(absentVal)) {
    absentVal++;
  }
  return [min, absentVal, max];
};

// using a for loop

const minMinMax3 = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) return [min, i, max];
  }
};
