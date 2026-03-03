// 34. Construct a CLI application with the following operations menu:
// 0. Exit
// 1. Area of square
// 2. Area of rectangle
// 3. Area of circle


import readlineSync from "readline-sync";

while (true) {
  console.log("\n===== MENU =====");
  console.log("0. Exit");
  console.log("1. Area of Square");
  console.log("2. Area of Rectangle");
  console.log("3. Area of Circle");

  let choice = readlineSync.question("Enter your choice: ");

  if (choice === "0") {
    console.log("Exiting program...");
    break;
  }

  else if (choice === "1") {
    let side = readlineSync.questionFloat("Enter side of square: ");
    let area = side * side;
    console.log("Area of Square =", area);
  }

  else if (choice === "2") {
    let length = readlineSync.questionFloat("Enter length: ");
    let width = readlineSync.questionFloat("Enter width: ");
    let area = length * width;
    console.log("Area of Rectangle =", area);
  }

  else if (choice === "3") {
    let radius = readlineSync.questionFloat("Enter radius: ");
    let area = Math.PI * radius * radius;
    console.log("Area of Circle =", area.toFixed(2));
  }

  else {
    console.log("Invalid choice! Try again.");
  }
}