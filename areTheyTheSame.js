// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript - 6 kyu

// compare two arrays - return if the second includes the square of an element in the first

// solution passes standard tests
function comp(array1, array2) {
  //your code here
  if (array1 === array2) return true;
  if (array1 || array2 === null) return false;

  for (let i = 0; i < array1.length; i++) {
    let square = array1[i] ** 2;
    if (array2.includes(square)) {
      return true;
    } else {
      return false;
    }
  }
}


const comp = (a, b) => {

    let result = false
    for (let i=0; i<a.length; i++){
        for (let j=0;j<b.length; j++){
            
            if (b[j] === Math.pow(a[i], 2)) 
        }
    }
}


function comp(array1, array2) {
    //your code here
    let result = false
    if (array1 === null || array2 === null) return false;
    if (array1.length === 0 && array2.length === 0) return true;
  
    for (let i = 0; i < array1.length; i++) {
      let square = Math.pow(array1[i], 2)
      if (array2.includes(square)) {
        result = true;
      } if (array2.includes(!square)) {
        result = false
      } 
      else {
        result = false;
      }
    }