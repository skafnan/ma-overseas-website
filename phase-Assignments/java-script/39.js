// 39. What is the temporal dead zone in JavaScript?

// Temporal Dead Zone (TDZ)
// The Temporal Dead Zone is the time between entering a scope and declaring a variable with let or const, during which the variable cannot be accessed.
// If you try to access it in this zone, JavaScript throws a ReferenceError.

console.log(a); // ReferenceError
let a = 10;
// Even though a is hoisted, it is not initialized, so it stays in the TDZ until the declaration line.

console.log(b); // ReferenceError
const b = 20;


// Prevents using variables before they are declared
// Helps catch bugs early
// Makes code more predictable