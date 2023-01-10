// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript - 7 kyu
/*
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

// parsing dates
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  workingCode(enteredCode, correctCode) && date(currentDate, expirationDate);

// HELPER METHODS BELOW - to test code and dates
function workingCode(code1, code2) {
  return code1 === code2;
}
// Date.parse
function date(d1, d2) {
  const date1 = Date.parse(d1);
  const date2 = Date.parse(d2);
  return date1 <= date2;
}

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false