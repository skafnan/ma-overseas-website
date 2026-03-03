import fs from 'fs'
import { question,questionInt } from 'readline-sync'


const db = './users.json'

fs.readFile(db, 'utf8',(err,data)=>{
    if(err) return console.log(err);

    const users = JSON.parse(data)
    console.log(users);
    
    const choice = question('do you want to create a new user')

    if (choice=='y'){
        const user ={
          name : question('enter the user name:'),  
          age : question('enter the user age:'),  
          city : question('enter the user city:'),  
        }
        users.push(user)

        fs.writeFile(db, JSON.stringify(users,null,4),(err)=>{
            if (err) return console.log(err);
            console.log('saved users!');
            
            
        })
    }
     console.log('exiting...');
    
})