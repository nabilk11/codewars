// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript - 5 kyu

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

function incrementString(string) {
  // return incrementedString
  let letters = [];
  let nums = [];

  for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      letters.push(string[i]);
    } else {
      nums.push(string[i]);
    }
  }
  let word = letters.join("");
  let number = +nums.join("");
//   console.log(word);
//   console.log(number);
  number = number + 1;
  return word + `${number}`;
}

console.log(incrementString("foobar099"));
