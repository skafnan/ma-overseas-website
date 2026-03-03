// 37. What is hoisting? Which declarations are hoisted and how does it work
// with let and const?

// Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before code execution.

// Only declarations are hoisted, not initializations.

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;