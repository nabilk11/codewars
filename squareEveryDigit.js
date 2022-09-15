// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

let input = 9119;
function squareDigits(num) {
  let numArr = [...num.toString()];
  let output = [];

  for (let i = 0; i < numArr.length; i++) {
    output.push(numArr[i] ** 2);
  }
  return Number(output.join(""));
}

// const squareDigits = (num) => +[...`${num}`].map((n) => n ** 2).join("");

// const a = [1, 2, 3, 4]
//           [2, 4, 6,]

console.log(squareDigits(input));
