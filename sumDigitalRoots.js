// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript - 6kyu

function digitalRoot(n) {
  if (n < 10) return n;
  return numTotal(n);
}

function numTotal(n) {
  return [...`${n}`].map((e) => +e).reduce((a, b) => a + b, 0);
}




function digitalRoot2(n) {
  const numArr = [...`${n}`];
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = +numArr[i] + sum;
    for (let j = 0; j < numArr.length; j++) {
      sum = +numArr[j] + sum;
    }
    if (sum < 10) return sum;
  }
}


console.log(digitalRoot(942));
console.log(digitalRoot(11));
console.log(digitalRoot2(942));
console.log(digitalRoot2(132189));
console.log(digitalRoot2(10));
