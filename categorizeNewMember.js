// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript - 7 kyu

// categorize members of a golf club as open or seniors based on their age and handicap

const openOrSenior = (data) =>
  data.map(([age, han]) => (age >= 55 && han > 7 ? "Senior" : "Open"));
