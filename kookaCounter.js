// https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript - 7 kyu

// loop through array
function kookaCounter(laughing) {
  // let lower = laughing.toLowerCase()
  let laughArray = laughing.split("a").filter((item) => item != "");
  let test = "";
  let count = 0;
  for (let i = 0; i < laughArray.length; i++) {
    test = laughArray[i];
    if (test !== laughArray[i + 1]) {
      count += 1;
    }
  }
  return count;
}

// loop through string
const kookaCounter2 = (l) => {
  let count = 0;
  const hChars = l.replaceAll("a", "");
  for (let i = 0; i < hChars.length; i++) {
    if (hChars[i] !== hChars[i + 1]) {
      count += 1;
    }
  }
  return count;
};

// match method
// match method for groups of consecutive Ha or ha
const kookaCounter3 = (laughing) => {
  const laughArray = laughing.match(/(Ha)+|(ha)+/g) || [];
  return laughArray.length;
};

console.log(kookaCounter("hahahahaha"));
console.log(kookaCounter("hahahahahaHaHaHa"));
console.log(kookaCounter2("hahahahaha"));
console.log(kookaCounter2("hahahahahaHaHaHa"));
console.log(kookaCounter3("hahahahaha"));
console.log(kookaCounter3("hahahahahaHaHaHa"));
