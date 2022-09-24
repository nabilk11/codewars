// https://www.codewars.com/kata/5ab363ff6a176b29880000dd/train/javascript - 7 kyu

// function hexHash(str) {
//   let arr1 = [];
//   let l = str.length;
//   for (let n = 0;  n < l; n++) {
//     let hex = Number(str.charCodeAt(n)).toString(16);
//     arr1.push(hex);
//   }
//   let hash = arr1.join("").replace(/\D/g, "");

//   return [...hash].map((item) => +item).reduce((a, b) => a + b, 0);
// }


function hexHash(str) {
    const strArr = [...str]
  const onlyDigits = strArr.map((item, idx)=>{
    return strArr[idx].charCodeAt(item).toString(16)
  }).join('').replace(/\D/g,'')
  return [...onlyDigits].map((item)=>+item).reduce((a,b)=>a+b,0)

}




console.log(hexHash("Yo"));
console.log(hexHash("Hello, World!"));
