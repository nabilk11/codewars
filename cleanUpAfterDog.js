// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript - 7 kyu
// x is 2D array, with @ representing dog crap, bags = bags of

// map through twice
const crap = (x, bags, cap) => {
  let crapCount = 0;
  let isDog;
  const totalCap = bags * cap;
  x.map((list) =>
    list.map((item) => {
      if (item === "@") {
        crapCount++;
      }
      if (item === "D") {
        isDog = true;
      }
    })
  );
  return isDog ? "Dog!!" : totalCap >= crapCount ? "Clean" : "Cr@p";
};

// with a frequency object
const crap2 = (x, bags, cap) => {
  let freqObj = { "@": 0 };
  const totalCap = bags * cap;
  x.map((list) => {
    for (let item of list) {
      if (freqObj[item]) {
        freqObj[item] += 1;
      } else {
        freqObj[item] = 1;
      }
    }
  });
  return Object.keys(freqObj).includes("D")
    ? "Dog!!"
    : totalCap >= freqObj["@"]
    ? "Clean"
    : "Cr@p";
};

// for loops
const crap3 = (x, bags, cap) => {
  let crapCount = 0;
  let totalCap = bags * cap;
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes("D")) {
      return "Dog!!";
    }
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === "@") {
        crapCount++;
      }
    }
  }
  return totalCap >= crapCount ? "Clean" : "Cr@p";
};

// merge all into one array with reduce method and concat

const crap4 = (x, bags, cap) => {
  const totalCap = bags * cap;
  let fullYard = x.reduce((a, b) => a.concat(b), []);
  let crapCount = fullYard.filter((item) => item === "@").length;

  return fullYard.includes("D")
    ? "Dog!!"
    : totalCap >= crapCount
    ? "Clean"
    : "Cr@p";
};


// LOGS FOR TESTING 

console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
);
console.log(
  crap2(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
);
console.log(crap2([["_"], ["_"], ["_"]], 8, 5));
console.log(
  crap2(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
);

console.log(
  crap3(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
);
console.log(crap3([["_"], ["_"], ["_"]], 8, 5));

console.log(
    crap4(
      [
        ["_", "_"],
        ["_", "@"],
        ["D", "_"],
      ],
      2,
      2
    )
  );
