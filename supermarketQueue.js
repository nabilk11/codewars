// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript - 6 kyu

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// solution

function queueTime(customers, n) {
  // create an array representing lines using Array.from
  let lines = Array.from({ length: n }, (val) => 0);
  // loop through customer times
  for (let waitTime of customers) {
    // find the index of first 0, then second and so on
    const lowestTimeLine = lines.indexOf(Math.min(...lines));
    // add each wait time to the lines array optimally
    lines[lowestTimeLine] += waitTime;
  }
  // return the highest number as this will be the total wait time
  return Math.max(...lines);
}
