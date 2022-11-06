// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript - 7 kyu

String.prototype.toJadenCase = function () {
    
  // let wordArray = this.split(" ");
  // const output = [];
  // for (let i = 0; i < wordArray.length; i++) {
  //   const newWord = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
  //   output.push(newWord)
  // }
  // return output.join(" ");
  return this.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
};




const s = "How can mirrors be real if our eyes aren't real";
console.log(s.toJadenCase());
