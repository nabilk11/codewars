// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript - 7 kyu

const triangular = (n) => {
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += i;
  }
  return number;
};

// while loop

const triangular2 = (n) => {
  let number = 0;
  let i = 1;
  while (i <= n) {
    number += i;
    i++;
  }
  return number;
};
