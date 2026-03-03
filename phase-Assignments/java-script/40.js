// 40. What is the difference between var, let, and const. What is the
// difference in terms of scope and redeclaration?

// var

// Scope: Function-scoped
// Redeclaration: Allowed
// Reassignment: Allowed
// Hoisting: Hoisted and initialized with undefined

var x = 10;
var x = 20; // allowed
x = 30;     // allowed

// let

// Scope: Block-scoped
// Redeclaration: ❌ Not allowed in same scope
// Reassignment: ✅ Allowed
// Hoisting: Hoisted but in Temporal Dead Zone

let y = 10;
// let y = 20; // error
y = 30;       // allowed

// const

// Scope: Block-scoped
// Redeclaration:  Not allowed
// Reassignment: Not allowed
// Hoisting: Hoisted but in Temporal Dead Zone

const z = 10;
// z = 20;    // error