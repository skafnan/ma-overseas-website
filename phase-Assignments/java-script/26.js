// 26. Explain .find() and .findIndex() with examples

let numbers = [5, 10, 15, 20];

let result = numbers.find(function (num) {
  return num > 10;
});

console.log(result);

let numberss = [5, 10, 15, 20];

let index = numberss.findIndex(function (num) {
  return num > 10;
});

console.log(index);