// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript - 4 kyu

const solution2 = (str, markers) =>
  str
    .split("\n")
    .map((str) =>
      str
        .split(new RegExp("[" + markers.map((m) => `\\${m}`).join("") + "]"))[0]
        .trim()
    )
    .join("\n");

const generateRegexFromMarkers = (markers) =>
  new RegExp("[" + markers.map((m) => `\\${m}`).join("") + "]");

const solution3 = (str, markers) => {
  const splitByNewLine = str.split("\n");
  const regexGeneratedFromMarkers = generateRegexFromMarkers(markers);
  const strippedStringsArray = splitByNewLine.map((str) =>
    str.split(regexGeneratedFromMarkers)[0].trim()
  );
  return strippedStringsArray.join("\n");
};

function solution(input, markers) {
  let inputArray = input.split(/[\n]/g);

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < markers.length; j++) {
      if (inputArray[i].indexOf(markers[j]) !== -1) {
        inputArray[i] = inputArray[i].slice(
          0,
          inputArray[i].indexOf(markers[j])
        );
      }
    }
    inputArray[i] = inputArray[i].trim();
  }
  return inputArray.join("\n");
}

console.log(
  solution2("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
); // "apples, plums\npears\noranges"
