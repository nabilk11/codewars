// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript - 6 kyu

function solution(str) {
  let outputArr = [];
  if (str.length % 2 !== 0) {
    str += "_";
  }
  let i = 0;
  while (i < str.length) {
    outputArr.push(str[i] + str[i + 1]);
    i += 2;
  }
  return outputArr;
}

function solution2(str) {
  let outputArr = [];
  if (str.length % 2 !== 0) {
    str += "_";
  }
let strArr = [...str]
  const iterations = str.length / 2;
  for (let i = 0; i < iterations; i ++) {
    outputArr[i] = strArr.splice(0,2).join('')
  }
  return outputArr;
}

console.log(solution("abcdefg"));
console.log(solution2("abcdefg"));
