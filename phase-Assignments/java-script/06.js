// 6. Write a program to reverse a string.
// Ex: ‘Hello’ -> ‘olleH’

let str = "Hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

console.log(reversed);

// output
// olleH