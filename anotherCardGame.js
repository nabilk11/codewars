// https://www.codewars.com/kata/633874ed198a4c00286aa39d/train/javascript - 7 kyu

// const solution = (frank, sam, tom) => {
//   const frankTotal = frank.reduce((a, b) => a + b, 0);
//   const samTotal = sam.reduce((a, b) => a + b, 0);
//   const tomTotal = tom.reduce((a, b) => a + b, 0);

//   return frankTotal > samTotal || frankTotal > tomTotal;
// };

// const solution = (frank, sam, tom) => {
//   let others = sam.concat(tom).sort((a, b) => a - b);
//   let frankWins = 0;
//   console.log(others);
//   for (let i = 1; i < frank.length; i++) {
//     for (let j = 1; j < others.length; j++) {
//       if (frank[i] > others[j]) {
//         frankWins++;
//       }
//     }
//   }

//   return frankWins > 1;
// };

// const solution = (f, s, t) => {
//   let frankWins = 0;
//   for (let i = 1; i < f.length; i++) {
   
//         if (f[i] > s[i] && f[i] > t[i]) {
//           frankWins++;
//         }
//       }
//   return f[0] === 0 ? frankWins >= 2 : frankWins >=1
// };


const solution = (f, s, t) => {
  let frankWins = 0;
  for (let i = 0; i < f.length; i++) {
   
        if (f[0] > s[i] && f[0] > t[i]) {
          frankWins++;
        }
        if (f[1] > s[i] && f[1] > t[i]) {
          frankWins++;
        }
        if (f[2] > s[i] && f[2] > t[i]) {
          frankWins++;
        }
        if (f[3] > s[i] && f[3] > t[i]) {
          frankWins++;
        }
      }
  return frankWins >= 2
};

console.log(solution([2, 5, 8, 11], [1, 4, 7, 10], [0, 3, 6, 9]));
