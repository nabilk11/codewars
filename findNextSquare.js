// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript - 7 kyu

// if a number if a perfect square return the next perfect square else return -1

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return isPerfectSq(sq) ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

// helper method to find if number is perfect square
function isPerfectSq(num) {
  return Math.ceil(Math.sqrt(num)) === Math.floor(Math.sqrt(num));
}

// secondary solution using module 1 & Math.pow

function findNextSquare2(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
