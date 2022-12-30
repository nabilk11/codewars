// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript - 7 kyu

const number = (busStops) => {
  const eachStop = busStops.map((item) => item.reduce((a, b) => -a - b, 0));
  return eachStop.reduce((a, b) => a + b, 0);
};

// secondary solution with only one reduce method and destructuring inner array
const number2 = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
