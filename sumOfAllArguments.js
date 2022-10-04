// https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript - 7kyu

function sum(...args) {
    // return the sum of all arguments given.
    return args.reduce((a,b)=>a+b)
  }

  const sum2 = (...args) => args.reduce((a,b)=>a+b)

  // without any args
  function sum3(){
    let res = 0
    for (const num of arguments) {
        res = res + num
    }
    return res
  }

  console.log(sum3(1,2,3,4,5,6))


