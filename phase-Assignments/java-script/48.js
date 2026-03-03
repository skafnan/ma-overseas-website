// 48. What is an IIFE (Immediately Invoked Function Expression)? Write an
// example and explain where it is useful.


// An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined.

// It runs once and does not pollute the global scope.

(function () {
  console.log("This runs immediately");
})();