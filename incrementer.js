// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript - 7 kyu

// for loop with helper method
function incrementer(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (i + 1);
    if (nums[i] > 9) {
      nums[i] = singleDigit(nums[i]);
    }
  }
  return nums;
}

function singleDigit(num) {
  return +[...`${num}`][1];
}

// one-liner - map method
const incrementer2 = (nums) => nums.map((item, idx) => (item + idx + 1) % 10);

console.log(incrementer([1, 2, 3]));
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]));

console.log(incrementer2([1, 2, 3]));
console.log(incrementer2([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]));
