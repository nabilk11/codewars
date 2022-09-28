// https://www.codewars.com/kata/5624e574ec6034c3a20000e6/train/javascript - 7 kyu

function hammingDistance(a, b) {
  const aArr = [...a];
  const bArr = [...b];

  let hammingCounter = 0;
  for (let i = 0; i < aArr.length; i++) {
    if (aArr[i] !== bArr[i]) {
      hammingCounter++;
    }
  }
  return hammingCounter;
}


function hammingDistance2(a, b) {

  let hammingCounter = 0;
  for (let i in a) {
    if (a[i] !== b[i]) {
      hammingCounter++;
    }
  }
  return hammingCounter;
}

console.log(hammingDistance("1010", "0101"));
console.log(hammingDistance2("1010", "0101"));
