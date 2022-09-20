// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript - 6kyu
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  const strArray = str.split(/[_-]/g);
  const firstWord = strArray.shift();
  return firstWord + strArray.map((word) => capitalizeFirstChar(word)).join("");
}

function capitalizeFirstChar(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

function toCamelCase2(str) {
  let strArray = str.split(/[_-]/g);
  const firstWord = strArray.shift();

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].replace(
      strArray[i][0],
      strArray[i][0].toUpperCase()
    );
  }

  return firstWord + strArray.join("");
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the_Stealth_Warrior"));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase(""));

console.log(toCamelCase2("the_stealth_warrior"));
