// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript - 7 kyu

// calculate the number of years an investor will take to get to the desired sum of money based on a given principal amount, added interest and tax deductions



const calculateYears = (principal, interest, tax, desired) => {
  let years = 0;
  let sum = principal;
  while (sum < desired) {
    sum = yearlyPL(sum, interest, tax);
    years++;
  }
  return years;
};

// helper method to calculate yearly profit/loss
function yearlyPL(principal, interest, tax) {
  const interestAdded = interest * principal;
  const taxDeducted = tax * interestAdded;
  return principal + interestAdded - taxDeducted;
}
