//

const noSpace = (x) => x.replaceAll(" ", "");



const noSpace2 = (x) => {
  let xArr = [...x];
  for (let i = 0; i < xArr.length; i++) {
    if (xArr[i] === " ") xArr[i] = "";
  }
  return xArr.join("");
};



const noSpace3 = (x) => {
  let ans = "";
  for (let i in x) {
    if (x[i] !== " ") ans = ans + x[i];
  }
  return ans;
};



const noSpace4 = (x) => x.split(" ").join("");

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace2("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace3("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace4("8 j 8   mBliB8g  imjB8B8  jl  B"));
