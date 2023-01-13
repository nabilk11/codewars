// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript - 7 kyu

// create a function that counts how many consonants are in a given string

// filter method

function consonantCount(str) {
  let strArr = [...str.toLowerCase().replace(/[^a-z]/g, "")];
  return strArr.filter((el) => /[^aeiou]/.test(el)).length;
}

const consonantCount = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/[aeiou]/g, "").length;
