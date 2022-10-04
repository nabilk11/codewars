// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript - 7 kyu


function balancedNum(number) {
  let numString = `${number}`;
  let res = 0;
  for (let i = 0; i < numString.length / 2 - 1; i++) {
    res += +numString[i] - +numString[numString.length - 1 - i];
  }
  return res == 0 ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(295591));
console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(32955914));
console.log(balancedNum(13));
