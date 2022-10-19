// https://www.codewars.com/kata/5945f0c207693bc53100006b/train/javascript - 5kyu

// break the array into groups with lengths of k and return the count of distinct elements in that array group



// INEFFICIENT SOLUTIONS - DONT PASS PERFORMANCE TESTS!!!

function countContiguousDistinct(k, arr) {
  // Your code here

  let outputArr = [];
  let testArr = [];

  const n = arr.length;

  const windowCnt = n - k + 1;

  for (let i = 0; i < windowCnt; i++) {
    // i = our starting point to slice
    testArr = [...new Set(arr.slice(i, k + i))];
    outputArr.push(testArr.length);
  }
  return outputArr;
}

function countContiguousDistinct2(k, arr) {
  let testArr = [];
  let outputArr = [];

  const n = arr.length;

  const windowCnt = n - k + 1;

  for (let i = 0; i < windowCnt; i++) {
    // i = our starting point to slice
    testArr = arr
      .slice(i, k + i)
      .filter((item, idx, arr) => arr.indexOf(item) === idx);

    outputArr.push(testArr.length);
  }
  return outputArr;
}

function countContiguousDistinct3(k, arr) {
  let outputArr = [];
  const n = arr.length;
  const windowCnt = n - k + 1;

  for (let i = 0; i < windowCnt; i++) {
    outputArr.push(
      arr.slice(i, k + i).filter((item, idx, arr) => arr.indexOf(item) === idx)
        .length
    );
  }
  return outputArr;
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]));
console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3])); // [3, 4, 4, 3]

console.log(countContiguousDistinct2(4, [1, 2, 1, 3, 4, 2, 3]));
console.log(countContiguousDistinct3(4, [1, 2, 1, 3, 4, 2, 3]));
