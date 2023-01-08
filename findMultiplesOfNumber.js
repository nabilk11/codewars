// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript - 8 kyu

// given a number and a limit, fill an array with the multiples of that number up to the limit

example;
// (2, 6) ---> [2, 4, 6]
// (5, 25) ---> [5, 10, 15, 20, 25]

// random solution with while loop

function findMultiples(integer, limit) {
  let output = [];
  let i = 1;
  let el = 1;
  while (el <= limit) {
    el = integer * i;
    output.push(el);
    i++;
  }
  output.pop();
  return output;
}

// best solution with for loop
function findMultiples2(int, lim) {
  let output = [];

  for (let i = int; i <= lim; i += int) output.push(i);

  return output;
}

const findMultiples3 = (int, lim) => {
  let output = [];
  const iterations = lim / int;
  for (let i = 1; i <= iterations; i++) {
    const el = int * i;
    output.push(el);
  }
  return output;
};

const findMultiples4 = (int, lim) =>
  Array.from({ length: lim / int }, (val, idx) => int * (idx + 1));
