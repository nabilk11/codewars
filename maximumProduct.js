// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript - 7 kyu

// find the max product of two adjacent array elements

function adjacentElementsProduct(array) {
  let maxProduct = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const currentProduct = array[i] * array[i + 1];
    maxProduct = currentProduct > maxProduct ? currentProduct : maxProduct;
  }
  return maxProduct;
}
