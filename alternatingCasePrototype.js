// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript - 8 kyu

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let stringArr = [...this.valueOf()];
  for (let i = 0; i < stringArr.length; i++) {
    if (/[a-z]/g.test(stringArr[i])) {
      stringArr[i] = stringArr[i].toUpperCase();
    } else if (/[A-Z]/g.test(stringArr[i])) {
      stringArr[i] = stringArr[i].toLowerCase();
    }
  }
  return stringArr.join("");
};

String.prototype.toAlternatingCase2 = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};


// swapCase method
String.prototype.toAlternatingCase3 = function () {
  const swapCase = (x) =>
    x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase();
  const stringArr = [...this];
  return stringArr.map(swapCase).join("");
};
