// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript - 7 kyu

// find the coordinates of x in a 2d array of x's & o's

const xMarksTheSpot = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x") {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result.length > 2 ? [] : result;
};

// map instead of for loops

const xMarksTheSpot2 = (input) => {
  let result = [];
  input.map((list, idx) =>
    list.map((item, idx2) => {
      if (item === "x") {
        result.push(idx);
        result.push(idx2);
      }
    })
  );
  return result.length > 2 ? [] : result;
};

// one for loop & includes method with only push once

const xMarksTheSpot3 = (input) => {
  let coords = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("x")) {
      coords.push([i, input[i].indexOf("x")]);
    }
  }
  return coords.length === 1 ? coords[0] : [];
};
