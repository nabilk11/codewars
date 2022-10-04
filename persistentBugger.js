// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript - 6kyu

function persistence(num) {
  //code me
  let multPersCount = 0;
  let numStr = `${num}`;

  while (numStr.length > 1) {
    numStr = `${[...numStr].reduce((a, b) => a * b)}`;

    multPersCount++;
  }
  return multPersCount;
}

// with for loop
const persistence2 = (num) => {
  let persCount = 0;
  for (let i = 0; num > 9; i++) {
    num = [...`${num}`].reduce((a, b) => a * b);
    persCount++;
  }
  return persCount;
};
console.log(persistence(39));
console.log(persistence2(39));
