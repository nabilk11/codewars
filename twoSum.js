// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript - 6 kyu

// leetcode twoSum problem

// initial solution passes all tests in most cases, occasionally fails random tests

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    for (let j = 1; j < numbers.length; j++) {
      const num2 = numbers[j];
      if (num + num2 === target)
        return [numbers.indexOf(num), numbers.lastIndexOf(num2)];
    }
  }
}

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const num1 = numbers[i];
      const num2 = numbers[j];
      if (num1 + num2 === target) return [i, j];
    }
  }
}
