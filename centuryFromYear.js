// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript - 8 kyu

// return the century from the year input
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Math.ceil ---> rounds a number up to the next largest int!

const century = (year) => Math.ceil(year / 100);
