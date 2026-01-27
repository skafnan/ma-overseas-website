// let person= {
//     'name' : 'afnan',
//     age : 23
// }
// console.log(person)
//these are objects

const { captureOwnerStack } = require("react")

// let person = {
//     'name' : 'afnan',
//     age : 23
// }


// person.name = 'shaik afnan'
// person.address = 'hyderabad'
// person.gender = 'male'
// person.height = '5.6'

// console.log(person['address'])
// console.log(person['gender'],person['height'])

//this is how we access the key
// let person = {
//    name : "afnan",
//   age : 23,
//   subject : 'js',

// }
// let address = {
//     door_number : 12,
//    area: 'masabtank' 

//  }
//  let user ={
//     personal_details: person,
//     resisdennce: address
//  }
//  console.log(user)
// let obj1={
//     a: 1,
//     b : 2
// }
// let obj2 = {
//     c : 3,
//     d : 4
// }
// let obj3 = {
//     obj1,
//     obj24 : obj2
// }
// console.log(obj3.obj24.c)

// let book = {
//     name : 'py',
//     pages : 545
// }
// let_author = {
//     author_name : 'hb',
//     author_age : 52
// }
// let mergedObject ={
//     ...book, ...author
// }
// console.log(mergedObject)
let student = [
{
name:'afnan', 
age : 23,
subject :'js',
},
{
    name: 'fahad',
    age : 24,
    subject :'java'


},
]
 

console.log(student)