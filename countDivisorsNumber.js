// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript - 7 kyu
// input : a number, output: the # of divisors

// set a counter, increment the counter as you loop through every number down and find that number to be evenly divisible

const getDivisorsCnt = (n) => {
  let divisorCount = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisorCount++;
  }
  return divisorCount;
};

function getDivisorsCnt2(n) {
  let divisorCount = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      divisorCount++;
    }
  }

  return divisorCount;
}
