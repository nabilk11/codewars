// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript - 7 kyu

function findLongest(array) {
  const lengths = array.map((el) => `${el}`.length);
  const longestIdx = lengths.indexOf(Math.max(...lengths));

  return array[longestIdx];
}


// one line reduce method
const findLongest2 = (array) =>
  array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
