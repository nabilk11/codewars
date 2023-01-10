//

const correct = (string) => {
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
};

console.log(correct("L0ND0N"));

