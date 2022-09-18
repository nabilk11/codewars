// https://www.codewars.com/kata/546f922b54af40e1e90001da - 6kyu

const alphabetPosition = (text, a = "abcdefghijklmnopqrstuvwxyz") =>
  [...text.toLowerCase()]
    .filter((c) => a.includes(c))
    .map((c) => a.indexOf(c) + 1)
    .join(" ");

function alphabetPosition2(text) {
  let lowerCase = text.toLowerCase().replace(/[^a-z]/g, "");
  let lowerCaseArr = [...lowerCase];
  let alphaArr = [..."abcdefghijklmnopqrstuvwxyz"];
  for (let i = 0; i < lowerCaseArr.length; i++) {
    for (let j = 0; j < alphaArr.length; j++) {
      if (lowerCaseArr[i] === alphaArr[j])
        lowerCaseArr[i] = alphaArr.indexOf(alphaArr[j]) + 1;
    }
  }
  return lowerCaseArr.join(" ");
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition2("The sunset sets at twelve o' clock."));
console.log(alphabetPosition3("The sunset sets at twelve o' clock."));
