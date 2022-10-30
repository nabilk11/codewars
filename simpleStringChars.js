// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript - 7 kyu

// return array with count of uppercase, lowercase, nums, and special chars in a given string

// procedural
const solve = (s) => {
  let upper = 0;
  let lower = 0;
  let nums = 0;
  let specChars = 0;

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      lower++;
    }
    if (/[A-Z]/.test(s[i])) {
      upper++;
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(s[i])) {
      specChars++;
    }
    if (/[0-9]/.test(s[i])) {
      nums++;
    }
  }
  return [upper, lower, nums, specChars];
};

// frequency object with for loop
const solve2 = (s) => {
  let charobj = { upper: 0, lower: 0, nums: 0, spec: 0 };
  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
      charobj["upper"]++;
    } else if (/[a-z]/.test(s[i])) {
      charobj["lower"]++;
    } else if (/[0-9]/.test(s[i])) {
      charobj["nums"]++;
    } else {
      charobj["spec"]++;
    }
  }
  return Object.values(charobj);
};

// frequency object with reduce method

const solve3 = (s) => {
  return Object.values(
    [...s].reduce(
      (acc, char) => {
        if (/[A-Z]/.test(char)) {
          acc.upper++;
        } else if (/[a-z]/.test(char)) {
          acc.lower++;
        } else if (/[0-9]/.test(char)) {
          acc.nums++;
        } else {
          acc.spec++;
        }
        return acc;
      },
      { upper: 0, lower: 0, nums: 0, spec: 0 }
    )
  );
};

console.log(solve("Codewars@codewars123.com"));
console.log(solve2("Codewars@codewars123.com"));
console.log(solve3("Codewars@codewars123.com"));
