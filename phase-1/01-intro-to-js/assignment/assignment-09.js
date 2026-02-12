// Q1. You have this array:

// const nums = [1, 2, 3, 4, 5]
// Use .map() to return a new array where every number is multiplied by 3. Expected output: [3, 6, 9, 12, 15]

// const nums = [1, 2, 3, 4, 5];

// const result = nums.map(num => num * 3);

// console.log(result); 
// Output: [3, 6, 9, 12, 15]




// Q2. You have this array:

// const nums = [10, 20, 30, 40, 50]
// Use .map() to return a new array where every number is divided by 10. Expected output: [1, 2, 3, 4, 5]

// const nums = [10, 20, 30, 40, 50];

// const result = nums.map(num => num / 10);

// console.log(result);
// Output: [1, 2, 3, 4, 5]


// Q3. You have this array:

// const words = ['hello', 'world', 'javascript']
// Use .map() to return a new array where every word is in UPPERCASE. Expected output: ['HELLO', 'WORLD', 'JAVASCRIPT']

// const words = ['hello', 'world', 'javascript'];

// const result = words.map(word => word.toUpperCase());

// console.log(result);
// Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


// Q4. You have this array:

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Use .filter() to return only the odd numbers. Expected output: [1, 3, 5, 7, 9]


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = nums.filter(num => num % 2 !== 0);

// console.log(result);
// Output: [1, 3, 5, 7, 9]


// Q5. You have this array:

// const nums = [5, 12, 3, 18, 25, 7, 30]
// Use .filter() to return only numbers greater than 10. Expected output: [12, 18, 25, 30]


// const nums = [5, 12, 3, 18, 25, 7, 30];

// const result = nums.filter(num => num > 10);

// console.log(result);
// Output: [12, 18, 25, 30]



// Q6. You have this array:

// const names = ['Ali', 'Bob', 'Sam', 'John', 'Jo']
// Use .filter() to return only names that have more than 3 characters. Expected output: ['John']


// const names = ['Ali', 'Bob', 'Sam', 'John', 'Jo'];

// const result = names.filter(name => name.length > 3);

// console.log(result);
// Output: ['John']



// Q7. You have this array:

// const nums = [1, 2, 3, 4, 5]
// Use .forEach() to print every number multiplied by 5. What is the return value of .forEach()? Write your answer as a comment.

// const nums = [1, 2, 3, 4, 5];

// nums.forEach(num => {
//   console.log(num * 5);
// });

// Return value of .forEach() is undefined


// Q8. What is the difference between .map() and .forEach()? Write your answer as comments in code. Then prove it with an example.


/*
Difference between .map() and .forEach():

.map()
- Returns a NEW array
- Used when you want to transform data
- Can be chained (because it returns an array)

.forEach()
- Returns undefined
- Used to perform side effects (like logging or updating something)
- Cannot be chained like .map()
*/



// Q9. You have this object:

// const student = {
//     name: 'Rahul',
//     age: 22,
//     city: 'Mumbai',
//     course: 'Fullstack'
// }
// Use Object.keys() to print all the keys. Use Object.values() to print all the values.


// const student = {
//     name: 'afnan',
//     age: 23,
//     city: 'hyd',
//     course: 'Fullstack'
// };

// Print all keys
// console.log(Object.keys(student));
// Output: ['name', 'age', 'city', 'course']

// Print all values
// console.log(Object.values(student));
// Output: ['afnan', 23, 'hyd', 'Fullstack']


// Q10. You have this array:

// const nums = [1, 2, 3, 4, 5]
// Without using .map(), write a regular for loop that does the same thing as:

// nums.map(n => n * 2)
// This is to understand what .map() is doing under the hood.

// const nums = [1, 2, 3, 4, 5];

// const result = [];

// for (let i = 0; i < nums.length; i++) {
//   result.push(nums[i] * 2);
// }

// console.log(result);
// Output: [2, 4, 6, 8, 10]



// Q11. You have this array:

// const prices = [100, 200, 350, 400, 150]
// Use .map() to apply an 18% GST to every price and return a new array with prices rounded to 2 decimal places.

// const prices = [100, 200, 350, 400, 150];

// const result = prices.map(price => 
//   Number((price * 1.18).toFixed(2))
// );

// console.log(result);
// Output: [118, 236, 413, 472, 177]


// Q12. You have this array:

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Chain .filter() and .map() together. First filter even numbers, then double them. Expected output: [4, 8, 12, 16, 20]

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = nums
//   .filter(num => num % 2 === 0)  // keep even numbers
//   .map(num => num * 2);          // double them

// console.log(result);
// Output: [4, 8, 12, 16, 20]


// Q13. You have this array of objects:

// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'David', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ]
// Use .filter() to return only students who passed (marks >= 50).


// Q13. You have this array of objects:

// const students = [
//     { name: 'alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'david', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ]
// Use .filter() to return only students who passed (marks >= 50).

// Q14. Using the same students array from Q13, use .map() to return a new array that contains only the names of all students. Expected output: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'David', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ];

// const names = students.map(student => student.name);

// console.log(names);
// ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

// Q15. Using the same students array from Q13, use .map() to add a new property grade to each student:

// marks >= 80 → grade: 'A'
// marks >= 60 → grade: 'B'
// marks >= 50 → grade: 'C'
// marks < 50 → grade: 'F

// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'David', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ];

// const gradedStudents = students.map(student => {
//   let grade;

//   if (student.marks >= 80) {
//     grade = 'A';
//   } else if (student.marks >= 60) {
//     grade = 'B';
//   } else if (student.marks >= 50) {
//     grade = 'C';
//   } else {
//     grade = 'F';
//   }

//   return { ...student, grade }; // create new object with grade
// });

// console.log(gradedStudents);

/*
[
  { name: 'Alice', marks: 85, grade: 'A' },
  { name: 'Bob', marks: 42, grade: 'F' },
  { name: 'Charlie', marks: 76, grade: 'B' },
  { name: 'David', marks: 35, grade: 'F' },
  { name: 'Eve', marks: 90, grade: 'A' }
]
*/


// Q16. You have this array:

// const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'rat']
// Use .filter() to return only words with more than 4 characters, then use .map() to capitalize the first letter of each word. Expected output: ['Elephant', 'Hippopotamus']

// const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'rat'];

// const result = words
//   .filter(word => word.length > 4) // keep words with more than 4 characters
//   .map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)
//   );

// console.log(result);
// Output: ['Elephant', 'Hippopotamus']

// Q17. You have this array:

// const emails = ['Alice@Gmail.com', 'BOB@YAHOO.COM', 'charlie@hotmail.COM']
// Use .map() to return all emails in lowercase. Expected output: ['alice@gmail.com', 'bob@yahoo.com', 'charlie@hotmail.com']

// const emails = ['Alice@Gmail.com', 'BOB@YAHOO.COM', 'charlie@hotmail.COM'];

// const result = emails.map(email => email.toLowerCase());

// console.log(result);
// Output: ['alice@gmail.com', 'bob@yahoo.com', 'charlie@hotmail.com']

// Q18. You have this array:

// const nums = [1, 2, 3, 4, 5]
// Use .map() to return an array of objects like this: Expected output:

// [
//   { value: 1, square: 1 },
//   { value: 2, square: 4 },
//   { value: 3, square: 9 },
//   { value: 4, square: 16 },
//   { value: 5, square: 25 }
// ]

// const nums = [1, 2, 3, 4, 5];

// const result = nums.map(num => {
//   return {
//     value: num,
//     square: num * num
//   };
// });

// console.log(result);

/*
[
  { value: 1, square: 1 },
  { value: 2, square: 4 },
  { value: 3, square: 9 },
  { value: 4, square: 16 },
  { value: 5, square: 25 }
]
*/


// Q19. You have this object:

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 28,
//     email: 'john@example.com',
//     isActive: true
// }
// Use Object.keys() and .forEach() together to print every key and its value like:

// firstName: John
// lastName: Doe
// ...

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 28,
//     email: 'john@example.com',
//     isActive: true
// };

// Object.keys(user).forEach(function(key) {
//     console.log(key + ": " + user[key]);
// });

/*
firstName: John
lastName: Doe
age: 28
email: john@example.com
isActive: true
*/




// Q20. You have this array:

// const nums = [-5, -3, 0, 2, 4, -1, 7, -8]
// Use .filter() to return only positive numbers (greater than 0), then use .map() to return their squares.


// const nums = [-5, -3, 0, 2, 4, -1, 7, -8];

// const result = nums
//   .filter(num => num > 0)   // keep only numbers greater than 0
//   .map(num => num ** 2);    // square each number

// console.log(result);
// [4, 16, 49]


// Q21. You have this array:

// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ]
// Use .map() to add a total property to each item (price * qty).


// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ];

// const updatedCart = cart.map(item => {
//   return {
//     ...item,
//     total: item.price * item.qty
//   };
// });

// console.log(updatedCart);

/*
[
  { product: 'Shirt', price: 500, qty: 2, total: 1000 },
  { product: 'Pants', price: 1200, qty: 1, total: 1200 },
  { product: 'Shoes', price: 2000, qty: 1, total: 2000 },
  { product: 'Cap', price: 300, qty: 3, total: 900 }
]
*/


// Q22. Using the same cart array from Q21, use .filter() to return only items where the total (price × qty) is greater than 1000.

// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ];

// const expensiveItems = cart.filter(item => 
//   item.price * item.qty > 1000
// );

// console.log(expensiveItems);

/*
[
  { product: 'Pants', price: 1200, qty: 1 },
  { product: 'Shoes', price: 2000, qty: 1 }
]
*/


// Q23. You have this array:

// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ]
// Filter only users who are from India AND are 18 or older.


// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ];

// const result = users.filter(user =>
//   user.country === 'India' && user.age >= 18
// );

// console.log(result);

/*
[
  { name: 'David', age: 25, country: 'India' }
]
*/



// Q24. Using the same users array from Q23, use .map() after filtering to return only their names. Expected output: ['David']

// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ];

// const result = users
//   .filter(user => user.country === 'India' && user.age >= 18)
//   .map(user => user.name);

// console.log(result);
// ['David']


// Q25. You have this array:

// const sentences = ['hello world', 'i love javascript', 'coding is fun']
// Use .map() to return each sentence in title case (first letter of each word capitalized). Expected output: ['Hello World', 'I Love Javascript', 'Coding Is Fun']

// const sentences = ['hello world', 'i love javascript', 'coding is fun'];

// const result = sentences.map(sentence => 
//   sentence
//     .split(' ')                              // convert sentence into words
//     .map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     )
//     .join(' ')                               // join words back into sentence
// );

// console.log(result);
// ['Hello World', 'I Love Javascript', 'Coding Is Fun']


// Q26. You have this array:

// const data = [1, 'two', 3, 'four', 5, 'six', 7]
// Use .filter() to return only numbers (hint: use typeof). Expected output: [1, 3, 5, 7]


// const data = [1, 'two', 3, 'four', 5, 'six', 7];

// const result = data.filter(item => typeof item === 'number');

// console.log(result);
// [1, 3, 5, 7]


// Q27. You have this array of objects:

// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ]
// Filter only Engineering department employees, then use .map() to give them all a 10% salary raise.

// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ];

// const updatedEmployees = employees
//   .filter(emp => emp.department === 'Engineering')
//   .map(emp => ({
//     ...emp,
//     salary: emp.salary * 1.10  // 10% raise
//   }));

// console.log(updatedEmployees);

/*
[
  { name: 'John', department: 'Engineering', salary: 88000 },
  { name: 'Mark', department: 'Engineering', salary: 99000 },
  { name: 'Tom', department: 'Engineering', salary: 93500 }
]
*/




// Q28. Using the same employees array from Q27, use .forEach() to print a message for each employee:

// John works in Engineering and earns 80000
// Jane works in Design and earns 70000
// ...


// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ];

// employees.forEach(emp => {
//   console.log(`${emp.name} works in ${emp.department} and earns ${emp.salary}`);
// });

/*
John works in Engineering and earns 80000
Jane works in Design and earns 70000
Mark works in Engineering and earns 90000
Sara works in HR and earns 60000
Tom works in Engineering and earns 85000
*/


// Q29. You have this array:

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Without using .filter(), replicate the behavior of .filter() using .map(). Return the even numbers but use only .map(). What problem do you notice with this approach? Write your observation as a comment.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = nums.map(num => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });

// console.log(result);
// [undefined, 2, undefined, 4, undefined, 6, undefined, 8, undefined, 10]

/*
Observation:
- .map() always returns an array of the SAME length.
- For odd numbers, nothing is returned, so we get undefined.
- This is why .map() is NOT suitable for filtering.
- .filter() is better because it removes elements completely.
*/
