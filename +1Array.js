// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript - 6 kyu


// solution doesnt account for zeros in front of array

const upArray = (arr) => {
  let number = +arr.join("");
  number += 1;

  return [...number.toString()].map((item) => +item);
};
