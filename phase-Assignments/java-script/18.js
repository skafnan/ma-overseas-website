// 18. Use .filter() and return only positive elements in the array
// Ex: [10, -20, 30, 40, -1] -> [10, 30, 40]

let numbers = [10, -20, 30, 40, -1];

let positiveNumbers = numbers.filter(function (num) {
  return num > 0;
});

console.log(positiveNumbers);