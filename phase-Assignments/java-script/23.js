// 23. Write a function that checks if a given number is a prime number.

function isPrime(num) {

  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// examples
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false