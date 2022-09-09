// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript - 7kyu

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }