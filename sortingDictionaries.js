// https://www.codewars.com/kata/53da6a7e112bd15cbc000012/train/javascript - 7 kyu

function sortDict(dict) {

    const sortedArray = Object.entries(dict).sort(([, a], [, b]) => b - a);
    return sortedArray.map(([a,b])=>{
      if (isNaN(a)) return [a,b]
      return [+a, b]
    }) 
  }

//   console.log(sortDict({1:3,2:2,3:1}))
console.log(sortDict({ 1: 2, 2: 4, 3: 6 }));
