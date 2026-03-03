// 25. Use .reduce() to find the sum of all elements in [2,4,6,8].

let numbers = [2, 4, 6, 8];

let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);

console.log(sum);