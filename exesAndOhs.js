// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript - 7 kyu

// map through strArr
function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let lowercase = str.toLowerCase();
  let strArr = [...lowercase];
  strArr.map((item) => {
    if (item === "x") {
      xCount++;
    }
    if (item === "o") {
      oCount++;
    }
  });
  return xCount === oCount;
}

// for loop through lowercase str
const XO2 = (str) => {
  let lowercase = str.toLowerCase();
  let x = 0;
  let o = 0;
  for (let i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === "x") {
      x++;
    }
    if (lowercase[i] === "o") {
      o++;
    }
  }
  return x === o;
};

// filter method
const XO3 = (str) => {
  let lowercaseArr = [...str.toLowerCase()];
  let xCount = lowercaseArr.filter((item) => item === "x").length;
  let oCount = lowercaseArr.filter((item) => item === "o").length;
  return xCount === oCount;
};
