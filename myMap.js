// write a method on Array prototype called 'myMap'
// that does the exact same thing as `.map` on Array

Array.prototype.myMap = function (cb) {
  // code here
  let output = [];
  let arr = this.valueOf();
  let len = this.valueOf().length;
  for (let i = 0; i < len; i++) {
    output.push(cb(arr[i]));
  }
  return output;
};

// test cases
const a = ["hello", "my", "name", "is", "nabil"];
console.log(a.myMap((w) => w.toUpperCase())); // [ 'HELLO', 'MY', 'NAME', 'IS', 'NABIL' ]

const b = [1, 2, 3, 4];
const double = (n) => n * 2;
const triple = (n) => n * 3;

console.log(b.myMap(double)); // [2, 4, 6, 8]
console.log(b.myMap(triple)); // [3, 6, 9, 12]
