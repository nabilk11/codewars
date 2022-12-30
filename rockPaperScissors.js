// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript - 8 kyu

// rock paper scissors outcomes for 2 players

// create a dictionary
const rps = (p1, p2) => {
  const outcomes = {
    rock: {
      rock: "Draw!",
      paper: "Player 2 won!",
      scissors: "Player 1 won!",
    },
    paper: {
      rock: "Player 1 won!",
      paper: "Draw!",
      scissors: "Player 2 won!",
    },
    scissors: {
      rock: "Player 2 won!",
      paper: "Player 1 won!",
      scissors: "Draw!",
    },
  };
  return outcomes[p1][p2];
};

// secondary solution with alt dictionary

const rps2 = (p1, p2) => {
  const rules = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };
  return rules[p1] === p2
    ? "Player 1 won!"
    : p1 === p2
    ? "Draw!"
    : "Player 2 won!";
};
