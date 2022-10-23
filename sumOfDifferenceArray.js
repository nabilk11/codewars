// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript - 8kyu

function sumOfDifferences(arr) {
  let testArr = [];
  const sortedArr = arr.sort((a, b) => b - a);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    testArr.push(sortedArr[i] - sortedArr[i + 1]);
  }

  return testArr.reduce((a, b) => a + b, 0);
}
