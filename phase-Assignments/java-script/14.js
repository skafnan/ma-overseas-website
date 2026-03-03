// 14. Write a function using reduce() to find the sum of all numbers in an
// array.

function sumOfNumbers(arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

// example
let numbers = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numbers));