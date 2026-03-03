// 21. Write a function that finds the maximum of three numbers.

function maxOfThree(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

// example
console.log(maxOfThree(10, 25, 15));