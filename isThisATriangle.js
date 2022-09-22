// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript - 7 kyu

// determine if its a triangle by the length of the sides given

// if something is a triangle, the sum of two sides must be greater than the third: a+b>c
function isTriangle(a, b, c) {
  if (a + b > c &&  a + c > b && b + c > a) return true;
  return false;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
