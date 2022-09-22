// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript - 7kyu
// return the state of Like or Dislike

// function likeOrDislike(buttons) {

// function likeOrDislike(buttons) {
//   return buttons.reduce(
//     (prev, curr) => (prev === curr ? "Nothing" : curr),
//     "Nothing"
//   );
// }

function likeOrDislike(buttons) {
  let state = "Nothing";

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = "Nothing";
    } else {
      state = buttons[i];
    }
  }

  return state;
}

console.log(likeOrDislike(["Like", "Like"]));
console.log(likeOrDislike(["Dislike"]));
console.log(likeOrDislike(["Like", "Dislike", "Dislike"]));
