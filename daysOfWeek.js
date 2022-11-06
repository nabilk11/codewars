// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript - 8 kyu

function whatday(num) {
  // put your code here
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (num >= 1 && num <= 7) return days[num - 1];
  return "Wrong, please enter a number between 1 and 7";
}

// switch case
function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}
