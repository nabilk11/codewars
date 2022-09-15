// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript - 6 kyu

function createPhoneNumber(numbers) {
  let phoneNumber = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace("x", numbers[i]);
  }
  return phoneNumber;
}


const createPhoneNumber2 = (nums) => {
  const areaCode = nums.slice(0, 3).join('');
  const mid3 = nums.slice(3, 6).join('');
  const last4 = nums.slice(6).join('');
  return `(${areaCode}) ${mid3}-${last4}`
}