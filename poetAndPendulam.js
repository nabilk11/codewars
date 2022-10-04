// https://www.codewars.com/kata/5bd776533a7e2720c40000e5/train/javascript - 7 kyu

function pendulum2(values) { // [8,7,10,3]
  //code here
  let sortVals = values.sort((a, b) => a - b); // [3, 7, 8, 10]
  let output = [sortVals.shift()]; // [3]

  for (let i = 0; i < sortVals.length; i++) {
    output.push(sortVals[i + i]); // [3,7]
    output.unshift(sortVals[i + 1]); // [8,3]
  } 
  output = output.filter(Number);
  return output;
}

console.log(pendulum2([8,7,10,3])); // [10,4,9]
// console.log(pendulum2([4, 10, 9])); // [10,4,9]
