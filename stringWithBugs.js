// https://www.codewars.com/kata/599beb63b7a0473b1b000049/train/javascript - 6 kyu

// manually generate the regex for testing a string for having the subsstring of 'bug' in it

// on codewars tests only require regex - added function for review purposes

function stringWithBug(str) {
  let notBugRegex = /bug/;
  return !notBugRegex.test(str);
}

console.log(stringWithBug("good string"));
console.log(stringWithBug("bad bug string"));
console.log(stringWithBug("badbugs string two"));
