// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript - 7 kyu
//I will give you an integer. Give me back a shape that is as long and wide as the integer.

function generateShape(integer){
    const singleLine = `+`.repeat(integer) + '\n'
    return singleLine.repeat(integer).trim()  
  }
  

//   const noSpace = x => x.replaceAll(' ', '')

//   const noSpace = (x)=> {
//     let xArr = [...x]
//     for (let i=0; i<xArr.length;i++) {
//       if (xArr[i]===' ') xArr[i] = ''
//     }
//     return xArr.join('')
//   }
  const noSpace = (x)=> {
    let ans = ''
    for (let i in x) {
      if (x[i]!==' ') ans = ans + x[i]
    }
    return ans
  }


  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))