// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript - 6kyu
// take in array of all odds or all evens, except one, return the outlier

function findOutlier(integers) {
  //your code here
  let evens = [];
  let odds = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evens.push(integers[i]);
    } else odds.push(integers[i]);
  }
  return evens.length > odds.length ? odds[0] : evens[0];
}


function findOutlier2 (integers) {
    const evens = integers.filter((el)=>isEven(el))
    const odds = integers.filter((el)=> !isEven(el))

    return evens.length > odds.length ? odds[0]:evens[0]

}

function isEven(num) {
    if (num %2===0) return true
}


console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier2([2, 6, 8, 10, 3]));
