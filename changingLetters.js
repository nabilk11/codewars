// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript - 7 kyu

function swap(string) {
  let strArr = [...string];
  for (let i = 0; i < string.length; i++) {
    if (/[aeiou]/g.test(strArr[i])) {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join("");
}

// one-line string replace method w/ toupperCase function

const swap2 = (str) => str.replace(/[aeiou]/g, (vowel) => vowel.toUpperCase());


// .includes method with vowel array
const vowels = ["a", "e", "i", "o", "u"];

const swap = (str) =>
  [...str]
    .map((item) => (vowels.includes(item) ? item.toUpperCase() : item))
    .join("");
