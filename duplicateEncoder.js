// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript - 6kyu

// function duplicateEncode(word) {
//   // ...
//   let countObj = {};
//   let lowerCase = word.toLowerCase();
//   let charArray = [...lowerCase];
//   for (let i of lowerCase) {
//     countObj[i] = countObj[i] ? countObj[i] + 1 : 1;
//   }
//   for (let i = 0; i < charArray.length; i++) {
//     if (countObj[charArray[i]] === 1) {
//       charArray[i] = "(";
//     } else charArray[i] = ")";
//   }
//   return charArray.join("");
// }

const duplicateEncode = (
  w,
  h = [...w].reduce((a, e) => ({ ...a, [e]: (a[e] || 0) + 1 })),
  s = [...w].map((c) => (h[c] > 1 ? ")" : "(")).join('')
) => s;

// function freqHash(str) {
//   return [...str].reduce((a, e) => ({ ...a, [e]: (a[e] || 0) + 1 }), {});
// }

// function duplicateEncode(word) {
//   const h = freqHash(word);
//   return [...word].reduce((a, e) => a + (h[e] > 1 ? ")" : "("), "");
// }

// console.log(
//   [..."recede"].reduce((accum, el, idx, arr) => {
//     const letter = el === 'e' ? '' : el
//     return accum + letter;
//   }, "")
// );

// [...'recede'].filter(l => l !== 'e').join('')

// console.log(freqHash("recede"));
console.log(duplicateEncode("recede"));
