// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript - 6kyu
// count the number of bits equal to 1 of n

function countBits(n) {
  // Program Me
  const bitN = n.toString(2);
  const nonZeros = [...bitN].filter((e) => e !== "0");
  return nonZeros.length;
}

// Prettier Version :))))
const countBits2 = (n) => [...n.toString(2)].filter((e) => e !== "0").length;

// more procedural with a loop
const countBits3 = (n) => {
  let nonZeros = [];
  const bitN = n.toString(2);
  const bitNArr = bitN.split("");

  for (let i = 0; i < bitNArr.length; i++) {
    if (bitNArr[i] === "1") nonZeros.push(bitNArr[i]);
  }
  return nonZeros.length;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));

console.log(countBits2(0));
console.log(countBits2(4));
console.log(countBits2(7));
console.log(countBits2(9));

console.log(countBits3(0));
console.log(countBits3(4));
console.log(countBits3(7));
console.log(countBits3(9));
