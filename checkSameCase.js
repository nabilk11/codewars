// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript - 8 kyu

// one - line test method with Number constructor of true/false values
// Number(true) = 1 | Number(false) = 0

const sameCase = (a, b) =>
  /[a-z]/i.test(a) && /[a-z]/i.test(b)
    ? Number(/[a-z]/.test(a) == /[a-z]/.test(b))
    : -1;


    
// with helper methods and no Number constructor
const sameCase2 = (a, b) =>
  isLetter(a) && isLetter(b) ? (isLower(a) === isLower(b) ? 1 : 0) : -1;

function isLower(char) {
  return /[a-z]/.test(char);
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}
