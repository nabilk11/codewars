// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript - 6kyu


function arrayDiff(a, b) {


   return a.filter((x => !b.includes(x)))

    
  }

  console.log(arrayDiff([1,2,2,2,3],[2]))