// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript - 7 kyu
//I will give you an integer. Give me back a shape that is as long and wide as the integer.

function generateShape(integer){
    const singleLine = `+`.repeat(integer) + '\n'
    return singleLine.repeat(integer).trim()  
  }
  
  function spacified(x) {
 return (...x)
  }    

  console.log(spacified('hey'))
