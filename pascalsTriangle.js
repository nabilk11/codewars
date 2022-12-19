// https://www.codewars.com/kata/5226eb40316b56c8d500030f - 6 kyu

// n!/k!(n-k)!

// n = depth k = position
// create an output array
// push in the array of each level

// end ---> return output array and flatten by n depth === output.flat(n)

function pascalsTriangle(n) {
  let output = [];

  for (let i = 0; i < n; i++) {
    let currentArr = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        currentArr.push(1);
      } else if (j === i) {
        currentArr.push(1);
      } else {
        currentArr.push(output[i - 1][j - 1] + output[i - 1][j]);
      }
    }
    output.push(currentArr);
  }
  return output.flat(n);
}

function pascalsTriangle(n) {
 
  return [...Array(n)]
    .reduce((accum, n, idx) => {
      if (idx === 0) return [[1]];
      if (idx === 1) return [[1], [1, 1]];
      const lastRow = accum[idx - 1];
      const currentRow = [1];
      for (let i = 0; i < lastRow.length - 1; i++) {
        currentRow.push(lastRow[i] + lastRow[i + 1]);
      }
      currentRow.push(1);
      return [...accum, currentRow];
    }, [])
    .flat();
}

// console.log(pascalsTriangle(4));
console.log(pascalsTriangle(5));

// idx versus val in terms of n
// n - n = n-n + 1
// n - 1 = n-n +1
//

// function createInnerArray(n, prevArr) {
//   for (let i = 0; i < prevArr.length; i++) {}
//   return Array.from({ length: n }, (val, idx) => {
//     if (idx === n - n || idx === n - 1) val = n - n + 1;
//   });
// }

function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  let pTri = [];
  let currRow = [1];
  let i = 0;

  while (i < n) {
    pTri = pTri.concat(currRow);
    currRow = nextRow(currRow);
    i++;
  }
  return pTri;
}

function nextRow(lastRow) {
  let i = 0;
  let output = [1];
  let nextVal;

  while (output.length < lastRow.length) {
    nextVal = lastRow[i] + (lastRow[i + 1] || 0);
    output.push(nextVal);
    i++;
  }
  output.push(1);
  return output;
}
