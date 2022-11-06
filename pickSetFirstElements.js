// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript - 8 kyu

const first = (arr, n = 1) => arr.slice(0, n);

// procedural
function first2(arr, n) {
  if ((n == null)) {
    return [arr[0]];
  }
  if (n > arr.length) {
    return arr;
  }
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(arr[i]);
  }
  return output;
}

console.log(first(["a", "b", "c", "d", "e"], 2));
console.log(first(["a", "b", "c", "d", "e"], 0));
console.log(first(["a", "b", "c", "d", "e"], 3));
