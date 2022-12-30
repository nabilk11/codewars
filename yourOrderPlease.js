// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript - 6 kyu

// sort a string of words of mixed chars and nums by the nums in ascending order and return a new string

// sample inputs & outputs
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// sorted with replace method
function order(words) {
  let wordArr = words.split(" ");
  const sorted = wordArr
    .sort((a, b) => a.replace(/[^0-9]/g, "") - b.replace(/[^0-9]/g, ""))
    .join(" ");
  return sorted;
}

// sort using string.match() method

function order(words) {
  return words
    .split(" ")
    .sort((wordA, wordB) => wordA.match(/\d/) > wordB.match(/\d/))
    .join(" ");
}
