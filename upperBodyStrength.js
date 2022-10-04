// https://www.codewars.com/kata/571640812ad763313600132b/train/javascript - 7 kyu
// 10 katas in 60 minutes = 6 minutes per kata

function alexMistakes(numberOfKata, timeLimit) {
  let mistakeCount = 0;
  let mistakeTime = 5;
  let extraTime = timeLimit - numberOfKata * 6;

  // as long as there is time for mistakes, then mistakes are possible!
  while (extraTime >= mistakeTime) {
    extraTime -= mistakeTime;
    mistakeTime *= 2;
    mistakeCount++;
  }
  return mistakeCount;
}

// using math - finding the floor of the log-base2, adding 1 for first iteration
const alexMistakes2 = (numberOfKata, timeLimit) => {
  return Math.floor(Math.log2((timeLimit - 6 * numberOfKata) / 5 + 1));
};


console.log(alexMistakes(10, 120));
console.log(alexMistakes2(10, 120));
console.log(alexMistakes2(3, 45));
console.log(alexMistakes2(6, 60));
