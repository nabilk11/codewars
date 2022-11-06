// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript - 8 kyu

// two flowers, number of petals, if even + odd => true, else => false
// even + odd will always equal odd

const lovefunc = (flower1, flower2) => {
  const petalTotal = flower1 + flower2;
  return petalTotal % 2 !== 0;
};
