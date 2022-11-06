// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript - 7 kyu

// reverse an array without the reverse method
// array.reverse()

const reverse = (array) => {
  let reversed = [];
  for (let i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed;
};
