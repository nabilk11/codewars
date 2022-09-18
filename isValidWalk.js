// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript - 6 kyu

function isValidWalk(walk) {  
  if (walk.length !== 10) return false;
  let nCount = 0
  let sCount = 0
  let wCount = 0
  let eCount = 0
  
  for (let i of walk) {
    if (i === 'n') nCount = nCount+1
    if (i === 'e') eCount = eCount+1
    if (i === 's') sCount = sCount+1
    if (i === 'w') wCount = wCount+1
  }
  if (notEqual(nCount, sCount, eCount, wCount)) return false
  return true
}

function notEqual (n, s, e, w) {
    return n !== s || e !== w
}



console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(
  isValidWalk(["w", "e", "w", "e", "n", "s", "n", "s", "w", "e"])
);

