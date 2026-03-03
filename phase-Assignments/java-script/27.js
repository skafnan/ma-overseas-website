// 27. Write a program to sort a given array using .sort()

let numbers = [5, 2, 9, 1, 7];

numbers.sort(function (a, b) {
  return a - b;   
});

console.log(numbers);

// [1, 2, 5, 7, 9] output