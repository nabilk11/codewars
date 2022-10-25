// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript - 8kyu

function points(games) {
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    let x = games[i].split(":")[0];
    let y = games[i].split(":")[1];
    if (x > y) count += 3;
    if (x < y) count += 0;
    if (x == y) count += 1;
  }
  return count;
}

const points2 = (games) => {
  let count = 0;
  games.map((item) => {
    const x = item.split(":")[0];
    const y = item.split(":")[1];
    if (x > y) count += 3;
    if (x < y) count += 0;
    if (x == y) count += 1;
  });

  return count;
};

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points2([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ])
);
