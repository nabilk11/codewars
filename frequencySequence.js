// https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript - 7 kyu

// replace chars in a string with frequency of appearances in that string with an indicated seperator in between


// solve function 
function freqSeq(str, sep) {
  const strArr = [...str];
  const freqHash = freq(strArr);
  return strArr.map((item) => freqHash[item]).join(sep);
}


// frequency hash object helper method
function freq(it) {
  let hash = {};
  for (let i of it) {
    hash[i] = hash[i] ? hash[i] + 1 : 1;
  }
  return hash;
}
