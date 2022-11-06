// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript - 7 kyu

// map with Number constructor
const toNumberArray = (stringarray) => stringarray.map(Number);

// map with + sign operator
const toNumberArray2 = (stringarray) => stringarray.map((el) => +el);

// parse float
const toNumberArray3 = (stringarray) => stringarray.map(parseFloat);

// using a for loop
const toNumberArray4 = (stringarray) => {
  let outputArr = [];
  for (let i = 0; i < stringarray.length; i++) {
    outputArr.push(+stringarray[i]);
  }
  return outputArr;
};
