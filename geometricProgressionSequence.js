// https://www.codewars.com/kata/55caef80d691f65cb6000040/train/javascript - 7 kyu

// for loop

const geometricSequenceElements = (a, r, n) => {
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(a);
    a *= r;
  }

  return output.join(", ");
};

console.log(geometricSequenceElements(2, 3, 5));

// Array.from method
const geometricSequenceElements2 = (a, r, n) => {
  return Array.from({ length: n }, (_, idx) => a * r ** idx).join(", ");
};




function geometricSequenceElements3(a, r, n) {
  return [...Array(n)].map((_, i) => a * r ** i).join(", ");
}



console.log(geometricSequenceElements3(2, 3, 5));
