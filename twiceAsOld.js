// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript - 8 kyu

// calculate how many years ago or until dad is 2x son's age
// Math.abs gives absolute value of number

function twiceAsOld(dad, son) {
  // your code here
  let son2X = son * 2;
  return Math.abs(dad - son2X);
}
