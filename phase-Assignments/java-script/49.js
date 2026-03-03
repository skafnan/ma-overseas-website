// 49. Write a program to find the largest and the smallest number in an
// array (both with and without sorting).
// Ex: [3, 1, 9, 4, 7] → 1, 9


let arr = [3, 1, 9, 4, 7];

let smallest = arr[0];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }

  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(smallest, largest);

// output
// 1 9