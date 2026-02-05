// Function with Multiple Returns
// Write a function checkAge(age) that:

// Returns "minor" if age is less than 18
// Returns "adult" if age is between 18 and 65
// Returns "senior" if age is greater than 65

// function checkAge(age) {
//   if (age < 18) {
//     return "minor";
//   } else if (age <= 65) {
//     return "adult";
//   } else {
//     return "senior";
//   }
// }

// 2. Function Without Return
// Write a function greetUser(name) that prints "Welcome, [name]!" to the console. What happens if you try to use the return value?

// function greetUser(name) {
//   console.log("Welcome, " + name + "!");
// }

// 3. Default Parameters
// Write a function multiply(a, b) that multiplies two numbers. If only one number is provided, it should multiply by 10 as default.

// function multiply(a, b = 10) {
//   return a * b;
// }

// 4. Function with Validation
// Write a function divide(a, b) that:

// Returns the division result
// Prints an error message and returns undefined if b is 0
// Prints an error message if either parameter is not a number


// 5. Truthy/Falsy Check
// Write a function isValidInput(value) that returns true if the value is truthy (not 0, empty string, null, undefined, false), otherwise returns false.

// function isValidInput(value) {
//   return Boolean(value);
// }

// 6. Find Odd Numbers
// Write a function giveOdds(arr) that:

// Takes an array of numbers
// Returns a new array containing only odd numbers
// Returns an empty array if input is not an array

// function giveOdds(arr) {

//   // Check if input is an array
//   if (!Array.isArray(arr)) {
//     return [];
//   }

//   // Filter odd numbers
//   return arr.filter(num => num % 2 !== 0);
// }


// 7. Count Occurrences
// Write a function countOccurrences(arr, target) that counts how many times target appears in the array.

// Example: countOccurrences([1, 2, 3, 2, 4, 2], 2) should return 3

// function countOccurrences(arr, target) {

//   // Validate input
//   if (!Array.isArray(arr)) {
//     return 0;
//   }

//   let count = 0;

//   for (let value of arr) {
//     if (value === target) {
//       count++;
//     }
//   }

//   return count;
// }


// . Filter by Condition
// Write a function filterGreaterThan(arr, threshold) that returns all numbers in the array greater than the threshold value.

// function filterGreaterThan(arr, threshold) {

//   // Validate input
//   if (!Array.isArray(arr)) {
//     return [];
//   }

//   return arr.filter(num => num > threshold);
// }





// 9. Array Sum with Validation
// Write a function sumArray(arr) that:

// Returns the sum of all numbers in the array
// Returns 0 if array is empty
// Returns undefined with an error message if input is not an array
// function sumArray(arr) {

//   // Check if input is an array
//   if (!Array.isArray(arr)) {
//     console.log("Error: Input must be an array.");
//     return undefined;
//   }

//   // Check if array is empty
//   if (arr.length === 0) {
//     return 0;
//   }

//   let sum = 0;

//   for (let num of arr) {
//     sum += num;
//   }

//   return sum;
// }


// 10. Find Maximum
// Write a function findMax(arr) that returns the largest number in the array without using Math.max(). Return undefined if array is empty.

// function findMax(arr) {

//   // Check if input is an array
//   if (!Array.isArray(arr)) {
//     return undefined;
//   }

//   // Check if array is empty
//   if (arr.length === 0) {
//     return undefined;
//   }

//   let max = arr[0];

//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max;
// }



// function isPerfect(num) {

  // Perfect numbers must be positive integers
//   if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
//     return false;
//   }

//   let sum = 0;

//   // Find proper divisors
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === num;
// }


// 12. Armstrong Number
// Write a function isArmstrong(num) that checks if a number is an Armstrong number number that equals the sum of its own digits, each raised to the power of the total number of digits).

// Example: 153 is Armstrong because 1³ + 5³ + 3³ = 153

// function isArmstrong(num) {

//   // Armstrong numbers must be non-negative integers
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return false;
//   }

//   // Convert number to string to get digits
//   let digits = num.toString().split("");
//   let power = digits.length;

//   let sum = 0;

//   for (let digit of digits) {
//     sum += Math.pow(Number(digit), power);
//   }

//   return sum === num;
// }


// 13. Find All Primes in Range
// Write a function primesInRange(start, end) that returns an array of all prime numbers between start and end (inclusive).

// function primesInRange(start, end) {

//   let primes = [];

//   // Helper function to check prime
//   function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;



// 14. Sum of Digits 
// Write a function sumOfDigits(num) that returns the sum of all digits in a number.

// Example: sumOfDigits(1234) should return 10

// function sumOfDigits(num) {

//   // Validate input
//   if (typeof num !== "number" || !Number.isInteger(num)) {
//     return undefined;
//   }

//   // Convert number to string
//   let digits = Math.abs(num).toString().split("");

//   let sum = 0;

//   for (let digit of digits) {
//     sum += Number(digit);
//   }

//   return sum;
// }



// 15. Reverse Number
// Write a function reverseNumber(num) that reverses the digits of a number.

// Example: reverseNumber(1234) should return 4321


// function reverseNumber(num) {

//   // Validate input
//   if (typeof num !== "number" || !Number.isInteger(num)) {
//     return undefined;
//   }

//   // Handle negative numbers
//   let reversed = Math.abs(num)
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   return Number(reversed) * Math.sign(num);
// }



// 16. Fibonacci Sequence
// Write a recursive function fibonacci(n) that returns the nth Fibonacci number.

// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...

// function fibonacci(n) {

//   // Validate input
//   if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
//     return undefined;
//   }

//   // Base cases
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   // Recursive call
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }


// 17. Sum of Natural Numbers
// Write a recursive function sumNatural(n) that returns the sum of first n natural numbers.

// Example: sumNatural(5) should return 15 (1+2+3++5)

// function sumNatural(n) {

//   // Validate input
//   if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
//     return undefined;
//   }

//   // Base case
//   if (n === 0) {
//     return 0;
//   }

//   // Recursive case
//   return n + sumNatural(n - 1);
// }



// 18. Power Function
// Write a recursive function power(base, exponent) that calculates base raised to the exponent.

// Example: power(2, 3) should return 8


// function power(base, exponent) {

  // Validate input
//   if (typeof base !== "number" || typeof exponent !== "number" || exponent < 0) {
//     return undefined;
//   }

//   // Base case
//   if (exponent === 0) {
//     return 1;
//   }

//   // Recursive case
//   return base * power(base, exponent - 1);
// }


// 19. Count Down
// Write a recursive function countDown(num) that:

// Prints numbers from num down to 1
// Stops when it reaches 0
// Does NOT use a loop

// function countDown(num) {

//   // Validate input
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return;
//   }

//   // Base case
//   if (num === 0) {
//     return;
//   }

//   console.log(num);

//   // Recursive call
//   countDown(num - 1);
// }


// 20. Array Sum (Recursive)
// Write a recursive function sumArrayRecursive(arr, index) that calculates the sum of all elements in an array without using a loop.

// Hint: Use index parameter to track position, default it to 0.

// function sumArrayRecursive(arr, index = 0) {

//   // Validate input
//   if (!Array.isArray(arr)) {
//     return undefined;
//   }

//   // Base case: reached end of array
//   if (index === arr.length) {
//     return 0;
//   }

//   // Recursive case
//   return arr[index] + sumArrayRecursive(arr, index + 1);
// }
