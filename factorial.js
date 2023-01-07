// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript - 7 kyu

// write a function that returns the factorial of a given number or throws a RangeError is number is negative or above 12

// using RangeError constructor and for loop
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError("Numbers are out of range! Must be from 0-12");
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr.reduce((a, b) => a * b, 1);
}

// using Array.from method
const factorial2 = (n) => {
  if (n < 0 || n > 12) throw new RangeError("Numbers are out of range! Must be from 0-12");
  const newArr = Array.from({ length: n }, (val, idx) => idx + 1);
  return newArr.reduce((a, b) => a * b, 1);
};


// for loop without reduce method
const factorial3 = (n) => {
  if (n < 0 || n > 12) throw new RangeError("Numbers are out of range! Must be from 0-12");
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};


console.log(factorial(8))
console.log(factorial2(8))
console.log(factorial3(8))
console.log(factorial(13))
console.log(factorial2(-7))