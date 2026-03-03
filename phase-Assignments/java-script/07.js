// 7. Write a function that takes a number and prints EVEN or ODD, or throws
// an error if the given argument is not a number.



function checkEvenOdd(value) {

  if (typeof value !== "number") {
    throw new Error("Input is not a number");
  }

  if (value % 2 === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
}

// examples
checkEvenOdd(10);   
checkEvenOdd(7);   