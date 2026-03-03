// 30.Write a recursive function to print numbers from 1 to 5.

function printNumbers(n) {
  if (n > 5) {
    return;
  }

  console.log(n);
  printNumbers(n + 1);
}

// call the function
printNumbers(1);

// output
1
2
3
4
5