// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript - 8 kyu

const first = (arr, n=1) => {
    
    return arr.slice(0,n)
}

console.log(first(['a', 'b', 'c', 'd', 'e'], 2))
console.log(first(['a', 'b', 'c', 'd', 'e'], 0))
console.log(first(['a', 'b', 'c', 'd', 'e'], 3))