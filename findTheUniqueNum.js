// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript - 6 kyu

// find the unique number in an array

function findUniq(arr) {
  const freqs = freq(arr);
  for (let num in freqs) {
    if (freqs[num] === 1) return +num;
  }
}

// helper method for frequency object
function freq(it) {
  let obj = {};
  for (let i of it) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  return obj;
}

// alt solutions with arr.find() & filter method
// if first index of e and lastindexof e is equal it will return only that element 

function findUniq2(arr) {
  return arr.find((e) => arr.lastIndexOf(e) === arr.indexOf(e));
}

// 3rd solution with filter method

const findUniq3 = (arr) =>
  +arr.filter((e) => arr.indexOf(e) === arr.lastIndexOf(e));
