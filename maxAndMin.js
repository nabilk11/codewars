// https://www.codewars.com/kata/59c0cd4f46038781010000ac/train/javascript - 6 kyu

function max() {
  const argArr = [...arguments].flat(Infinity);
  if (argArr.length === 0) return 0;
  let newArr = argArr.map((item) => +item);

  if (newArr.includes(NaN)) return NaN;
  return newArr.reduce((prev, curr) => (prev > curr ? prev : curr), -Infinity);
}

function min() {
  const argArr = [...arguments].flat(Infinity);
  if (argArr.length === 0) return 0;

  let newArr = argArr.map((item) => +item);
  if (newArr.includes(NaN)) return NaN;
  return newArr.reduce((prev, curr) => (prev < curr ? prev : curr), +Infinity);
}


function max2() {
  let output = -Infinity

  for (let num of argArr) {
    const n = +num;
    if (isNaN(n)) return NaN;
    if (n < output) n = output;
  }
  return output;
}

function min2() {
  let output = Infinity

  for (let num of argArr) {
    const n = +num;
    if (isNaN(n)) return NaN;
    if (n < output) n = output;
  }
  return output;
}



console.log(max([]));
console.log(min([]));
// console.log(max(1, 2, [3, [4]]));
// console.log(max(1, 2, [3, ["4r"]]));

// console.log(min(1, 2, 3, 4));
// console.log(min(1, 2, [3, 4]));
// console.log(min(1, 2, [3, [4]]));
// console.log(min(1, 2, [3, ["4r"]]));
// console.log(min(1, 2, [3, [4, 0]]));
