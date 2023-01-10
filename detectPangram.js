// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript - 6 kyu

// pangram is a sentence that includes every letter of the alphabet
// detect if the string is a pangram or not

function isPangram(string) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  string = string.toLowerCase();

  for (let ltr of alpha) {
    if (!string.includes(ltr)) return false;
  }
  return true;
}

// using array.every() method

function isPangram2(string) {
  const alpha = [..."abcdefghijklmnopqrstuvwxyz"];
  string = string.toLowerCase();

  return alpha.every((letter) => string.includes(letter));
}
