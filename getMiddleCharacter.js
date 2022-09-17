// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript - 7kyu

function getMiddle(s) {
  const charArr = [...s];
  const middleNum = charArr.length / 2;
  if (charArr.length % 2 == 0)
    return `${charArr[middleNum - 1]}${charArr[middleNum]}`;
  return `${charArr[Math.floor(middleNum)]}`;
}
