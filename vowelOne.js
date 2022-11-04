// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript - 7 kyu

const vowelOne = (s) => {
  let vowelRegex = /[aeiouAEIOU]/g;
  s = s.replaceAll(vowelRegex, "1");
  s = s.replaceAll(/[^0-9]/g, "0");
  return s;
};

const vowelOne2 = (s) => {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (/[aeiouAEIOU]/.test(s[i])) {
      res[i] = "1";
    } else {
      res[i] = "0";
    }
  }
  return res.join("");
};

// map through array w/test method
const vowelOne3 = (s) => {
  let sArray = [...s];
  return sArray.map((item) => (/[aeiouAEIOU]/.test(item) ? 1 : 0)).join("");
};

console.log(vowelOne("vowelOne"));
console.log(vowelOne2("vowelOne"));
console.log(vowelOne3("vowelOne"));
