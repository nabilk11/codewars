// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript - 6kyu

function duplicateCount(text) {
  //...
  let count = 0
  let lowerCase = text.toLowerCase();
  let countObj = {};
  for (let num of lowerCase) {
    countObj[num] = countObj[num] ? countObj[num] + 1 : 1;
  }
  for(let i in countObj) {
    if (countObj[i] >1) count++
  }
  return count
}

console.log(duplicateCount("aabbcde"))
console.log(duplicateCount(""))


