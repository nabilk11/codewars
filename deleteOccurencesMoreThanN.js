// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript - 6 kyu

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

// creating a frequency counter at the same time as pushing into output array
// loop through array and push elements into output and count occurrences each time, stops pushing once the occurrences equal n

function deleteNth(arr, n) {
  let output = [];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    count[num] = count[num] ? count[num] + 1 : 1;
    if (count[num] <= n) output.push(num);
  }
  return output;
}

// examples
//   deleteNth([20,37,20,21], 1) --> [20,37,21]
//   deleteNth([1,1,3,3,7,2,2,2,2], 3) --> [1, 1, 3, 3, 7, 2, 2, 2]


// filtering out nums that occur more than n

const deleteNth2 = (arr, n) => {
  let obj = {};
  return arr.filter((num) => ((obj[num] = (obj[num] || 0) + 1), obj[num] <= n));
};
