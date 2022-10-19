// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript - 7 kyu

function scale(string, k, n) {
    // your code
    let output = []
    let stringArr = string.split('\n')
    console.log(stringArr)
    for (let i=0; i<stringArr.length;i++){
        for (let j=0; j<stringArr[i].length; j++){
            stringArr[i][j] = stringArr[i][j].repeat(k) 
            console.log(stringArr)
        }
    }

    return output
}


console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3))