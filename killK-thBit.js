// https://www.codewars.com/kata/58844f1a76933b1cd0000023/train/javascript - 7kyu
// change n to binary -> change kth digit to 0 -> change back
// binary representation
// toString(2)

const killKthBit = (n, k) => {
    let x = n.toString(2).split('')
    x[x.length - k] = 0
    return parseInt(x.join(''), 2)
    
}


