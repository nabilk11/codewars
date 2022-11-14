// https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript - 7 kyu

const numberJoy = (n) => {
  // your code
  const s = [...`${n}`].map(Number).reduce((a, b) => a + b);
  const reverseS = [...`${s}`].reverse().join("");
  return s * reverseS === n;
};

// no need for map
const numberJoy2 = (n) => {
    // your code
    const s = [...`${n}`].reduce((a, b) => +a + +b);
    const reverseS = [...`${s}`].reverse().join("");
    return s * reverseS === n;
  };