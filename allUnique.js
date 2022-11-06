// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript - 7 kyu

// true/false - if a str has all unique chars

// create a set
// compare the size of the set to the length of the str for uniques - true/false

function hasUniqueChars(str) {
  let charSet = new Set(str);
  return charSet.size == str.length;
}

// with an object
const hasUniqueChars2 = (str) => {
  let charObj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charObj[char]) return false;
    charObj[char] = true;
  }
  return true;
};
