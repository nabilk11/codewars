// https://www.codewars.com/kata/56426b4e971f01fd2f00005b/train/javascript - 7 kyu

// Find the square root to 5 decimal places without Math.sqrt or Math.pow

// square root equals to the 1/2 power


const squareRoot = (x) => {
    const sqrt = x ** .5
    return +sqrt.toFixed(5)
}