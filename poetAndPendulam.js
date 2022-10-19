// https://www.codewars.com/kata/5bd776533a7e2720c40000e5/train/javascript - 7 kyu

function pendulum(vals) {
  let sortVals = vals.sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < sortVals.length; i++) {
    if (i % 2 === 0) {
      output.unshift(sortVals[i]);
    } else {
      output.push(sortVals[i]);
    }
  }
  return output;
}


const pendulum2 = values =>
  values.sort((a, b) => a - b).reduce((pre, val) => pre.length % 2 ? [...pre, val] : [val, ...pre], []);


console.log(pendulum([8, 7, 10, 3]));
console.log(pendulum2([8, 7, 10, 3]));
