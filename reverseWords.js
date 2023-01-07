// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript - 7 kyu

// reverse each word in a string and return new string

// examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const output = [];
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    output.push([...word].reverse().join(""));
  }
  return output.join(" ");
}

// using map method

const reverseWords2 = (str) => {
  const strArr = str.split(" ");
  return strArr.map((word) => [...word].reverse().join("")).join(" ");
};
