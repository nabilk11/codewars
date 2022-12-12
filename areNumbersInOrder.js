// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript - 7 kyu

// is the array of ints in ascending order

const inAscOrder = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

// comparing two strings 
const inAscOrder2 = arr => arr.join('') === arr.sort((a, b) => a - b).join('');

