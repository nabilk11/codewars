// https://www.codewars.com/kata/5a306685e1ce0e3fa500010b/train/javascript - 6 kyu


function solution(input) {
    let gridObj = {}
    const inputArr = input.split(',').map((el, idx, arr)=>{
        return [...el]
    })
    console.log(inputArr)
    return 0;
  }

  console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'))