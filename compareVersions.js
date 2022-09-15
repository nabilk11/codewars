// https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript - 6kyu

function compareVersions(version1, version2) {
  let arr1 = version1.split(".");
  let arr2 = version2.split(".");

  let maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (Number(arr1[i]) < Number(arr2[i])) return false;
  }
  return true;
}

console.log(compareVersions("10.9", "10.10"));
console.log(compareVersions("10.4", "10.4"));
// console.log(parseFloat("10.4.6"))
console.log(compareVersions("10.4.6", "10.4"));
//
