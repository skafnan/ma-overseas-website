import fs from 'fs'
import { question,questionInt } from 'readline-sync'

const db = './users.json'

fs.readFile(db, 'utf8',(err,data)=>{
    if(err) return console.log(err);

    const users = JSON.parse(data)
    console.log(users);
    
    console.log('1. create a new user');
    console.log('1. create a existing user');
    console.log('1. update a existing user');
    
    const choice = question('enter your choice')

    switch (choice){
        case 1:
          console.log('please enter the user details below');
          const user = {
            name: question('enter the user name:'),
            age: question('enter the user age:'),
            city: question('enter the user city:'),
          }
            users.push(user)
            break;

            case 2:
           const name2= question('enter the user name you want to delete:'),
            const index2 = users.findIndex((usr)=>)
            city: question('enter the user city:'),
          }
            case 3:
                const name3 = question('enter the name od the user you want to update')
