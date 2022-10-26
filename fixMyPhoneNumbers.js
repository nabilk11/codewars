// https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript - 7 kyu

// valid phone number --> 11 digit string, only nums, starts with 0

const isItANum = (str) => {
  let phoneNumber = str.replace(/[^0-9]+/g, "");
  return phoneNumber.length === 11 && phoneNumber[0] == 0
    ? phoneNumber
    : "Not a phone number";
};


// helper method

const isItANum2 = (str) => {
    let nums = str.replace(/[^0-9]+/g, "")
    return validNum(nums) ? nums : 'Not a phone number'
}

function validNum(nums) {
    return nums.length === 11 && nums[0] === '0'
} 


console.log(isItANum2('hh0278jhb093jj8ooi&9*27'))