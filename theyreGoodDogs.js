// https://www.codewars.com/kata/5965144da82d479517000001/train/javascript - 7 kyu

// replace 0-9/10 rating with correct rating/10 in a string

// with for loop, includes method and replace method
function weRateDogs(str, rating) {
  //write code here
  let digits = "0123456789";
  let badRating = "";
  for (let i = 0; i < digits.length; i++) {
    if (str.includes(digits[i] + "/10")) {
      badRating = digits[i] + "/10";
    }
  }
  str = str.replace(badRating, `${rating}/10`);
  return str;
}

// better solution with rating regex 
// regex generated from https://ibnuhx.com/regex-generator/?ref=madewithvuejs.com

const weRateDogs2 = (str, rating) => {
  let ratingRegex = /[0-9]\/10/;
  str = str.replace(ratingRegex, `${rating}/10`);

  return str;
};