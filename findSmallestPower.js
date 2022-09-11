// https://www.codewars.com/kata/56ba65c6a15703ac7e002075/train/javascript - 7kyu



function findNextPower(val, pow_) {
    //your code here
    if (val===1) return 2**pow_
    for (let i=0; i<=val; i++) {
        if (i**pow_ > val) return i**pow_
    }
    return 0;
}


