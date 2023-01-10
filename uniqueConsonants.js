// https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript - 7 kyu

// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

// solution with 2 filters, test method and a set - need to cut down and improve the regex

// spread a new set with lowercase string to get unique chars, then filter out anything that isnt a letter
// filter out any letter that is a vowel

function countConsonants(str) {
  const uniqChars = [...new Set(str.toLowerCase())].filter((char) =>
    /[a-z]/.test(char)
  );
  const consCount = uniqChars.filter((char) => /[^aeiou]/.test(char)).length;
  return consCount;
}

// better solution with improved regex and Set.size

const countConsonants2 = (str) => {
  const consonantsRegEx = /[^a-z]|[aeiou]/g; //any char thats not a lowercase letter or aeiou

  const onlyCons = str.toLowerCase().replace(consonantsRegEx, "");
  const uniqConsonantSet = new Set(onlyCons);
  return uniqConsonantSet.size;
};
