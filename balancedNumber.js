// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript - 7 kyu

// function balancedNum(number) {
//   let numStr = `${number}`;
//   let numStrArr = [...numStr];
//   const middleNumber = numStr.length / 2;

//   let left = [];
//   let right = [];
//   if (numStr.length <=2) return 'Balanced'
//   if (numStr.length % 2 === 0) {
//     left = numStrArr
//       .slice(0, middleNumber - 1)
//       .map((item) => +item)
//       .reduce((a, b) => a + b, 0);
//     right = numStrArr
//       .slice(middleNumber)
//       .map((item) => +item)
//       .reduce((a, b) => a + b, 0);
//   } else {
//     left = numStrArr
//       .slice(0, Math.floor(middleNumber))
//       .map((item) => +item)
//       .reduce((a, b) => a + b, 0);
//     right = numStrArr
//       .slice(Math.ceil(middleNumber))
//       .map((item) => +item)
//       .reduce((a, b) => a + b, 0);
//   }

//   return left === right ? "Balanced" : "Not Balanced";
// }

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


let num = 9898
console.log(num)
num = num +''
console.log(num)
let ans = [...num].reduce((a,b)=>Number(a)+Number(b))
console.log(ans)