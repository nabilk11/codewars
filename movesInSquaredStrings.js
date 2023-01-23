// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript - 7 kyu

function vertMirror(strng) {
  let arr = strng.split("\n");
  return arr.map((string) => [...string].reverse().join("")).join("\n");
}
function horMirror(strng) {
  let arr = strng.split("\n");
  return arr.reverse().join("\n");
}
function oper(fct, s) {
  return fct(s);
}
