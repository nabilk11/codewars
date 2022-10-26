// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript - 8kyu

// return true/false if your score was higher than class average

const betterThanAverage = (classArr, you) => {
  const classAvg = classArr.reduce((a, b) => a + b, 0) / classArr.length;
  return you > classAvg;
};
