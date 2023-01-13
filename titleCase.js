// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript - 6 kyu

function titleCase(title, minor) {
  title = title.toLowerCase();
  minor = minor ? minor.toLowerCase() : "";
  const output = [];
  const ignoreList = minor.split(" ");
  const strArr = title.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (!ignoreList.includes(word) || i === 0) {
      word = makeTitleCase(word);
    }
    output.push(word);
  }
  return output.join(" ");
}

// Helper method to make word title case
function makeTitleCase(word) {
  return word.length ? word[0].toUpperCase() + word.slice(1).toLowerCase() : "";
}


function titleCase(title, minorWords) {
    const output = [];
    const ignoreList = minorWords ? minorWords.toLowerCase().split(" ") : [];
    const strArr = title.toLowerCase().split(" ");
  
    for (let i = 0; i < strArr.length; i++) {
      let word = strArr[i];
      if (!ignoreList.includes(word) || i === 0) {
        word = makeTitleCase(word);
      }
      output.push(word);
    }
    return output.join(" ");
  }


let sentence = 'hey what is happening with the content for doctor richard swift, i need it finished by this week. And you should check out buccal fat removal and LabiAPlasty'
let ignore = 'it is for with the and'
console.log(titleCase(sentence, ignore))