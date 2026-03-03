import fs from 'fs'

const users = [
    {name:'afnan',age:23, city:'hyderabad'},
    {name:'ali',age:25, city:'towlichoki'},
    {name:'anwar',age:23, city:'uppal'},
]

console.log(users);
console.log(typeof users);
const data = JSON.stringify(users,null,4)
console.log(data);
console.log(typeof data);

