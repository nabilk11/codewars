// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript - 7 kyu

function isIsogram(str) {
  let lowerCase = str.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++)
    for (let j = i + 1; j < lowerCase.length; j++)
      if (lowerCase[i] === lowerCase[j]) {
        return false;
      }
  return true;
}

// regex and .test
function isIsogram2(str) {
  let lowerCase = str.toLowerCase();
  return !/(.).*\1/.test(lowerCase);
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram2("Dermatoglyphics"));


// solution comparing array length to size of new Set

const isIsogram3 = (str) => {
  const lowercaseArr = [...str.toLowerCase()]
  return lowercaseArr.length === new Set(lowercaseArr).size
 }