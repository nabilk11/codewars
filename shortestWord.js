// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript - 7 kyu
// given a string of words, return the length of the shortest word

function findShort(s) {
  let wordArr = s.split(" ");
  let wordLengths = [];
  for (let i = 0; i < wordArr.length; i++) {
    wordLengths.push(wordArr[i].length);
  }
  return Math.min(...wordLengths);
}

function findShort2(s) {
  let wordArr = s.split(" ");
  let wordLengths = [];
  wordArr.map((item, idx, arr) => wordLengths.push(item.length));
  return Math.min(...wordLengths);
}

function findShort3(s) {
  let wordArr = s.split(" ");
  return Math.min(...wordArr.map(item=>item.length))
}

function findShort4(s){
    const wordArr = s.split(' ');
    let smallest = wordArr[0].length;
    for (let i = 0; i < wordArr.length; i++) {
      if(wordArr[i].length < smallest){
        smallest = wordArr[i].length;
      }
    }
    return smallest;
  }

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort2("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort3("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort4("bitcoin take over the world maybe who knows perhaps"));
