// https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript - 7kyu

function breakChocolate(n,m) {
    if (n*m) return n*m -1
    return 0;
  }

const breakChocolate2 = (n, m) => n*m>0 ? n*m-1 : 0
