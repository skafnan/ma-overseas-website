// 3. Write a function that prints multiplication table of a given number.
// (take user input for n)
// Example output if n = 3:
// 3 x 1 = 3
// 3 x 2 = 6
// .
// .
// 3 x 10 = 30


function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
  }
}

let n = 3;
printTable(n);
