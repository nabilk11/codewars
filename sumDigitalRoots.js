// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript - 6kyu

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(numTotal(n));
}

function numTotal(n) {
  return [...`${n}`].map((e) => +e).reduce((a, b) => a + b);
}

console.log(digitalRoot(942));
console.log(digitalRoot(11));
