// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript - 8 kyu

// given an array of nums, see if any num correlates to the char code for a vowel, and return a new array with those nums changed to the vowels

function isVow(a) {
  const withVowels = a.map((num) =>
    /[aeiou]/.test(String.fromCharCode(num)) ? String.fromCharCode(num) : num
  );
  return withVowels;
}
