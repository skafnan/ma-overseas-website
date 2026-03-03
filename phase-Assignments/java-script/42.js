// 42. What are spread and rest operators? Explain their differences with
// examples.

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };

console.log(obj2);