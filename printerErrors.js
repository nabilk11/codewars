// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript - 7 kyu

// given an error string - chars from a-m are good, other chars mean errors
// return a string showing how many chars out of the error string signify errors

// example
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let errorCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[^a-m]/.test(char)) {
      errorCount++;
    }
  }
  return `${errorCount}/${s.length}`;
}
