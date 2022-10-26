//

function enough(cap, on, wait) {
  // your code here
  const space = cap - on;
  const diff = space - wait;
  return diff < 0 ? Math.abs(diff) : 0;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
