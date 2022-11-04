// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript - 8kyu


// with String object - String.prototype
// valueOf gives value of string object

String.prototype.isUpperCase = function () {
  // your code here
  let str = this.valueOf();
  let upper = this.toUpperCase();

  return str === upper;
};


// with test method

String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this)
}