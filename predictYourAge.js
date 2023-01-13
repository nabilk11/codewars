// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript - 7 kyu

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let args = [...arguments];
  return Math.floor(args.reduce((a, b) => a + b * b, 0) ** 0.5 / 2);
}

