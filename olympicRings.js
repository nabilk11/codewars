// https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript - 7 kyu

// identify if a string has "letters with rings in them" "OoagqDdPQRbpeA" --> have 1 ring | "B" --> has 2 rings
// divide the # of rings by 2 and round down

function olympicRing(a) {
  let rings = 0;
  for (let i = 0; i < a.length; i++) {
    if (/[OoagqDdPQRbpeA]/g.test(a[i])) {
      rings += 1;
    }
    if (/[B]/g.test(a[i])) {
      rings += 2;
    }
  }
  rings = Math.floor(rings / 2);

  return rings <= 1
    ? "Not even a medal!"
    : rings === 2
    ? "Bronze!"
    : rings === 3
    ? "Silver!"
    : "Gold!";
}
