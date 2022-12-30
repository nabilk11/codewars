// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript - 8 kyu

const fakeBin = (x) => x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

const fakeBin2 = (x) => [...x].map((digit) => (digit < 5 ? "0" : "1")).join("");
