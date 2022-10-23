// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript - 7 kyu

// true/false - if a str has all unique chars

// create a set

function hasUniqueChars() {
    let charSet = new Set(str)
    return charSet.size == str.length
}


