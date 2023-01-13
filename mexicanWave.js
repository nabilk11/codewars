// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript - 6 kyu

// output a string as a mexican wave

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// using for loop, create new word at each iteration, if the current element in the word array is a space, skip that iteration using continue

function wave(str) {
  let output = [];

  for (let i = 0; i < str.length; i++) {
    let wordArr = [...str];
    if (wordArr[i] == " ") continue;

    wordArr[i] = wordArr[i].toUpperCase();
    const currWord = wordArr.join("");

    output.push(currWord);
  }
  return output;
}

// alt solution using slice method

function wave(str) {
  let waveArr = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
    }
  }
  return waveArr;
}
