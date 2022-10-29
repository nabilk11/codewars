// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript - 7 kyu


// best practice

const squares = (x,n) => {
    let output = []
    for (let i = 0; i<n; i++){
        output.push(x)
        x*=x
    }
    return output
}

function squares2(x, n) {
  if (n <= 0) return [];
  let output = [x];
  for (let i = 0; i < n - 1; i++) {
    output.push(output[i] * output[i]);
  }
  return output;
}

// array.from method - create an array from an array-like object

const squares3 = (x, n) =>
  Array.from({ length: n }, (el, idx) => (idx === 0 ? x : (x *= x)));
