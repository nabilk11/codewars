// https://www.codewars.com/kata/5945f0c207693bc53100006b/train/javascript - 5kyu

// break the array into groups with lengths of k and return the count of distinct elements in that array group

function countContiguousDistinct(k, arr) {
  const firstWindow = arr.slice(0, k); // [1,2,1,3]
  const set = new Set(firstWindow); // 3
  const hash = createFreqHash(firstWindow); // {1: 2, 2: 1, 3: 1}

  const output = [set.size]; // [3]

  for (let i = 1; i < arr.length - k + 1; i++) {
    const lastEl = arr[i - 1]; // 1
    const nextEl = arr[i + k - 1]; 

    // removing lastEl from ds's
    hash[lastEl]--;
    if (hash[lastEl] === 0) {
      set.delete(lastEl);
    }

    // adding nextEl to ds's
    hash[nextEl] = hash[nextEl] ? hash[nextEl] + 1 : 1;
    set.add(nextEl);

    output.push(set.size);
  }

  return output;
}

function createFreqHash(arr) {
  return arr.reduce((o, c) => {
    o[c] = o[c] ? o[c] + 1 : 1;
    return o;
  }, {});
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3])); // [3, 4, 4, 3]

// function countContiguousDistinct(k, arr) {
//   // Your code here

//   let outputArr = [];
//   let testArr = [];

//   const n = arr.length;

//   const windowCnt = n - k + 1;

//   for (let i = 0; i < windowCnt; i++) {
//     // i = our starting point to slice
//     testArr = [...new Set(arr.slice(i, k + i))];
//     outputArr.push(testArr.length);
//   }
//   return outputArr;
// }

// function countContiguousDistinct2(k, arr) {
//   let testArr = [];
//   let outputArr = [];

//   const n = arr.length;

//   const windowCnt = n - k + 1;

//   for (let i = 0; i < windowCnt; i++) {
//     // i = our starting point to slice
//     testArr = arr
//       .slice(i, k + i)
//       .filter((item, idx, arr) => arr.indexOf(item) === idx);

//     outputArr.push(testArr.length);
//   }
//   return outputArr;
// }

// function countContiguousDistinct3(k, arr) {
//   let outputArr = [];
//   const n = arr.length;
//   const windowCnt = n - k + 1;

//   for (let i = 0; i < windowCnt; i++) {
//     outputArr.push(
//       arr.slice(i, k + i).filter((item, idx, arr) => arr.indexOf(item) === idx)
//         .length
//     );
//   }
//   return outputArr;
// }

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]));

// console.log(countContiguousDistinct2(4, [1, 2, 1, 3, 4, 2, 3]));
// console.log(countContiguousDistinct3(4, [1, 2, 1, 3, 4, 2, 3]));
