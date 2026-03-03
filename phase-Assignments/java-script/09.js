function minOf(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// example
let numbers = [5, 3, 8, 1, 4];
console.log(minOf(numbers));