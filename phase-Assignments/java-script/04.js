// 4. Write a program to print the following pattern.
// 10
// 10 20
// 10 20 30
// 10 20 30 40


for (let i = 1; i <= 4; i++) {
  let row= "";

  for (let j = 1; j <= i; j++) {
    row = row + (j * 10) + " ";
  }

  console.log(row);
}

// output
// 10
// 10 20
// 10 20 30
// 10 20 30 40