// 17. Explain slice and splice.
// slice
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5]


// splice

let arr1 = [1, 2, 3, 4, 5];
arr.splice(2, 1);

console.log(arr); // [1, 2, 4, 5]