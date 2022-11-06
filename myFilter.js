// write a method on Array prototype called 'myFilter'
// that does the exact same thing as `.filter` on Array

Array.prototype.myFilter = function (cb) {
  let output = [];
  let arr = this.valueOf();
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
};

// test cases
const a = [1, 2, 3, 4, 5, 6];
const isEven = (n) => n % 2 === 0;
console.log(a.myFilter(isEven)); // [2, 4, 6]
console.log(a.filter(isEven)); // [2, 4, 6]
