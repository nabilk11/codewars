// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript - 6 kyu

//return the total number of smiling faces in the array

// brute force approach with helper method valid smile
const countSmileys = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (validSmile(el)) {
      count++;
    }
  }
  return count;
};

function validSmile(str) {
  const len = str.length;
  if (len > 3 || len < 2) return false;
  if (str[0] !== ":" && str[0] !== ";") return false;
  if (str[len - 1] !== ")" && str[len - 1] !== "D") return false;
  if (len === 3 && str[1] !== "-" && str[1] !== "~") return false;
  return true;
}
// solution with regex
const countSmileys2 = (arr) =>
  arr.filter((e) => /[:;][-~]?[)D]/.test(e)).length;
