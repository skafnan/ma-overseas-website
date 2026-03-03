// 10. Write a function that finds the factorial of a number using:
// ➔ Recursion
// ➔ For loop

function factorialRec(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRec(n - 1);
}

// example
console.log(factorialRec(5));