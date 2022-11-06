// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript - 7 kyu

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// each array element => capital char + lowercase char -repeated*indexofchar

// for loop
function accum(s) {
  let output = [];
  const charArray = [...s.toUpperCase()];
  for (let i = 0; i < charArray.length; i++) {
    const newWord = charArray[i] + charArray[i].toLowerCase().repeat(i);
    output.push(newWord);
  }

  return output.join("-");
}

// one line map
const accum2 = (s) =>
  [...s.toUpperCase()]
    .map((char, idx) => char + char.toLowerCase().repeat(idx))
    .join("-");


    // bad solution
const accum3 = (s, l = s.length) =>
  [...Array(l)]
    .map((_, i) => s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
    .join("-");

console.log(accum("ZpglnRxqenU"));
console.log(accum2("ZpglnRxqenU"));
console.log(accum3("ZpglnRxqenU"));
