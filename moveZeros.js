// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript - 5 kyu

const moveZeros = (arr) => {
  const [zeros, nonZeros] = [
    arr.filter((el) => el === 0),
    arr.filter((el) => el !== 0),
  ];
  return nonZeros.concat(zeros);
};
