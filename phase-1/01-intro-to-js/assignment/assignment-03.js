// Q1. Create an array called myInfo with your name (string), age (number), city (string), and a boolean value true.

// A) let myInfo= ['shaik afnan', 23, 'hyderabad' ,'true']
// console.log(myInfo)

// Q2) Access and print the second element from the myInfo array you created
//  let myInfo= ['shaik afnan', 23, 'hyderabad' ,'true']
// console.log(myInfo[1])
 
// Q3)Change the third element of your myInfo array to a different city name. Print the updated array.
// let myInfo= ['shaik afnan', 23, 'hyderabad' ,'true']
// myInfo[2] = 'delhi'
// console.log(myInfo[2])

// Q4)Create an array colors with three color names. Use push() to add two more colors. Print the final array.
// let color = ['yellow', 'green' ,'pink']
// color.push('white')
// color.push('black')
// console.log(color)

// Q5. Create an array numbers with values [5, 10, 15, 20, 25]. Use pop() to remove the last element and store it in a variable. Print both the array and the removed element.'
// let numbers= [5,10,15,20,25]
// numbers.pop(25)
// console.log(numbers)

// Q6. What is the output? Predict first, then verify.
// let arr = [10, 20, 30, 40]
// console.log(arr.length)
// console.log(arr[arr.length - 1])
// output : 4 , 40

// Q7. Create an array fruits with 3 fruit names. Use shift() to remove the first element. Print the array and the removed element.
// let fruits = ['apple', 'mango', 'grapees']
// fruits.shift(1)
// console.log(fruits)

// Q8. Create an array animals with 2 animal names. Use unshift() to add 2 more animals at the beginning. Print the final array.
// let animal = ['monkey','lion']
// animal.unshift('hippo', 'tiger')
// console.log(animal)

// Create an array with 5 numbers. Add a new element at the end using the array's length property (without using push). Print the array
// let numbers = [1,2,3,4,5]
// numbers[numbers.length] = 6
// console.log(numbers)

// Q11. Create two arrays: myFruits with 3 fruits and myVeggies with 3 vegetables. Create a third array basket that contains both arrays. Print basket.
// let myFruits = ['apple', 'banana' ,'mango']
// let myVeggies = [ 'carrot', 'potato' ,  'cabbage']
// let basket = [[myVeggies, myFruits]]
// console.log(basket)

// Q12. Using the basket array from Q11, access and print the second fruit.
// let myFruits = ['apple', 'banana' ,'mango']
// console.log(myFruits[1])

//  Q13. What will be the output?

//  let fruits = ['apple', 'mango', 'banana']
// let veggies = ['tomato', 'potato']
// let basket = [fruits, veggies]

// console.log(basket.length)
//  console.log(basket[0].length)
//  console.log(basket[1].length)



// First output: __5_____________
// Second output: _________apple______
// Third output: ______mango_________

// Q14 Q14. Create a nested array:

// let data = [10, 'hello', ['a', 'b', 'c']]
// Access and print the letter 'b'.
// console.log(data[2][1]);

// Q15 Q15. What will be the output?

// let arr = [5, 'test', ['x', 'y', 'z']]
// console.log(arr[2])
// console.log(arr[2][0])
// console.log(arr[2][2])
// Your Prediction:

// First output: __x,y,z_____________
// Second output: ____x___________
// Third output: ____z___________

// Q16. Create a 2D array representing student data:

// Student 1: 'Ali', 20, 'Delhi'
// Student 2: 'Sara', 22, 'Mumbai'
// Student 3: 'John', 21, 'Bangalore'
// Access and print Student 2's city.
// console.log(students[1][2]);

// Q17. Using the array from Q16, print the age of Student 3.
// console.log(students[2][1]);

// Q18. Create two arrays and combine them into a nested array. Then use .flat() to flatten them into a single array. Print both versions.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let nestedArray = [arr1, arr2];
// console.log(nestedArray);

// Q19. What is the difference between these two?

// let arr1 = [['a', 'b'], ['c', 'd']]
// let arr2 = ['a', 'b', 'c', 'd']
// 1) nested array 2) normal array

// Q20. Create a nested array with 3 rows and 2 columns (like a table). Access and print the value in row 2, column 1.
// let table = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];





// //20
// let table = [
//     [11, 12],
//     [21, 22],
//     [31, 32],
// ]


// console.log(table[1][0]);


// //21
// arr1 = [10, 20, 30]
// arr2 = arr1
// arr1[0] = 100
// console.log(arr1)//[100, 20, 30]
// console.log(arr2)//[100, 20, 30]
// //In JavaScript for Non Primitive Datatypes it only stores the reference and not each value seperately that is they share the same memory


// //22
// arr1 = [5, 10, 15]
// arr2 = arr1
// arr2.push(20)
// console.log(arr1)//[5, 10, 15, 20]
// console.log(arr2)//[5, 10, 15, 20]


// //23
// let original = [1, 2, 3]
// let duplicate = [...original]
// duplicate.pop()


// console.log(original);
// console.log(duplicate);


// //24
// arr1 = [100, 200]
// arr2 = [...arr1]
// arr2[0] = 999
// console.log(arr1[0])//100
// console.log(arr2[0])//999


// //25
// arr1 = [1, 2, 3]
// arr2 = [...arr1]
// console.log(arr1 == arr2)//false
// console.log(arr1[0] == arr2[0])//true
// //arr1 and arr2 are different as they do not share the same memory because of the spreadoperator used they are seen as differnt elemnts
// //whereas below we are comparing the values inside the array to check if they are equal


// //26
// arr1 = [1, 2, 3]
// arr2 = [1, 2, 3]
// console.log(arr1 == arr2)
// //false same as the above they do not share the same memory


// //27
// arr2 = arr1        // Method 1
// arr2 = [...arr1]   // Method 2
// //Method 1 create an array arr1 using the same refernce in shared memory
// //Method 2 creates an image of elements of arr2 in arr1 in an new space


// //28
// arr1 = [1, 2, 3]
// arr2 = [...arr1]
// arr3 = arr1
// arr3.push(4)


// console.log(arr1);
// console.log(arr2);


// //29
// let student = {
//     name: 'Afnan',
//     age: 23,
//     city:'Hyderabad',
// }


// console.log(student);


// //30
// console.log(student.name);


// //31
// student.marks=85


// console.log(student);


// //32
// student['full name'] = 'Afnn'
// //console.log(student);


// console.log(student['full name']);


// //33
// const person = {
//   name: 'Omer',
//   age: 21
// }


// person.city = 'Hyderabad'
// console.log(person)//{ name: 'Omer', age: 21, city: 'Hyderabad' }


// //34
// let car = {
//     brand:'Tesla',
//     model:'Model X',
//     year:2022
// }
// delete car.year
// console.log(car);


// //35
// const user = {
//   'user name': 'john123',
//   'email address': 'john@example.com'
// }


// console.log(user['user name'])//john123
// console.log(user['email address'])//john@example.com


// //36
// let phone  = {
//     brand: 'iPhone',
//     price: 27000,
//     color: 'blue',
// }


// console.log(phone);


// phone.price=25000


// console.log(phone);


// //37
// per_son = {
//   'full name': 'Omer Ahmed',
//   age: 21
// }//In JS objects are denoted using {} to seperate them from other other datatypes preventing from unlikely and unexpected errors


// //38
// let book ={
//     title:'JS',
//     author:'RY',
//     pages:500,
//     isAvailable:true
// }
// console.log(book);


// //39
// const obj = { name: 'Omer' }
// console.log(obj.age)//undefined
// //undefined as is the datatype returned for any empty value or path in JS instead of null or others


// //40
// book ={
//     title:'JS',
//     author:'RY',
//     pages:500,
//     isAvailable:true,
//     signed:true
// }


// book.copiesavailable=20
// book.type='paperback'
// //console.log(book);
// book.signed=false
// //console.log(book);
// delete book.copiesavailable
// console.log(book);


// //41
// arr1 = [
//     {name:'doritos', price:30, inStock:100},
//     {name:'lays', price:20, inStock:150},
//     {name:'bingo', price:10, inStock:200},
// ]
// console.table(arr1)


// //42
// console.log(arr1[1].price);


// //43
// let obj1 = {
//     key: 'value',
//     keychain: 'batman',
//     array:['1',2]
// }
// console.log(obj1.array[0]);


// //44
// fruits = ['apple', 'mango']
// veggies = ['tomato', 'potato']
// basket = [fruits, veggies]


// basket[0].push('banana')
// console.log(fruits)//['apple', 'mango', 'banana]
// console.log(basket[0])//['apple', 'mango', 'banana]


// //45
// let studentObjects = {
//     name: "Yashwanth",
//     rollNumber : 1204,
//     marks : [50,60,70]
// }


// console.log('Average Marks:',(studentObjects.marks[0]+studentObjects.marks[1]+studentObjects.marks[2])/3);


// //46
// let dict1 = {1:1, 2:2}
// let dict2 = {1:1, 2:2}
// console.log(dict1==dict2);//false
// //as reference is different and JS does not recognize them as as equal


// //47
// arr = [1, 2, 3]
// arr.push(4)
// arr[0] = 10
// arr.pop()
// console.log(arr)//[10, 2, 3]
// console.log(arr.length)//3


// //48
// let school ={
//     name: 'The Hacking School',
//     address : {
//         city : 'Masab Tank',
//         pincode : 500006
//     },
//     students : ['Afnan', 'Fazal', 'Yashwant', 'Anas']
// }


// console.log(school.address.city);


// //49
// // Case 1
// obj2 = obj1
// //In this obj2's reference is given to obj1 if one of them is manuplated the other is also changed as they share the same memory and reference


// // Case 2  
// obj2 = { ...obj1 }
// //here each element is copied and given as a new element with different address


// //50
// let people = [
//   {
//     name: 'Afnan',
//     hobbies: ['coding', 'travel', 'music']
//   },
//   {
//     name: 'Afnan',
//     hobbies: ['coding', 'travel']
//   }
// ]


// console.log(people[0].hobbies[1])


// ****














