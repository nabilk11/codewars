// write a method on Array prototype called 'myEvery'
// that does the exact same thing as `.every` on Array

Array.prototype.myEvery = function (cb) {
  const arr = this.valueOf();
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) return false;
  }

  return true;
};

// test cases
const a = [1, 2, 3, 4, 5, 6];
const b = [2, 4, 6, 8, 10];
const c = [2, 3, 4, 5, 6];
const isEven = (n) => n % 2 === 0;
console.log(a.myEvery(isEven)); // false
console.log(b.myEvery(isEven)); // true
console.log(c.myEvery(isEven)); // false
