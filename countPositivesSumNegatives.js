// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript - 8 kyu

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];
  let outputArr = [];
  let countPos = 0;
  let sumNeg = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPos += 1;
    }
    if (input[i] < 0) {
      sumNeg += input[i];
    }
  }
  outputArr.push(countPos);
  outputArr.push(sumNeg);
  return outputArr;
}

const countPositivesSumNegatives2 = (input) => {
  if (input === null || input.length === 0) return [];
  let outputArr = [];
  let positives = input.filter((el) => el > 0);
  let negatives = input.filter((el) => el < 0);
  outputArr.push(positives.length);
  outputArr.push(negatives.reduce((a, b) => a + b, 0));
  return outputArr;
};

// one - liner
const countPositivesSumNegatives3 = (input) =>
  input && input.length
    ? [
        input.filter((el) => el > 0).length,
        input.filter((el) => el < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
