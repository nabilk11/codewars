// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript - 6kyu

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(numTotal(n));
}

function numTotal(n) {
  return [...`${n}`].map((e) => +e).reduce((a, b) => a + b);
}

// without map - not needed

function digitalRoot2(n) {
  // ...
  if (n < 10) return n;
  return digitalRoot(numTotal2(n));
}

const numTotal2 = (n) => {
  return [...`${n}`].reduce((a, b) => +a + +b);
};


// without helper method

function digitalRoot3(n) {
  n = [...`${n}`].reduce((a, b) => +a + +b);
  if (n < 10) return +n;
  return digitalRoot3(n);
}

console.log(digitalRoot(942));
console.log(digitalRoot(11));
