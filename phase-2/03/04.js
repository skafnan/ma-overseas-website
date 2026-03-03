import fs from 'fs/promises'
import {hashpassword,comaparePassword} from './01-bcrypt.js'
import {question,questionInt} from 'readline-sync'
import { log } from 'console'

const createUser = async() =>{
    const user ={
        id: Date.now(),
        username: question('enter the name of the user:'),
        password : question('create a password :'),
        confirm : question('confirm your password:')

    }
    const data= await fs.readFile('./users.json','utf-8')
    const users = JSON.parse(data)

    const existingUser = users.find((usr)=>{
        return usr.username == user.username
    })
    if (existingUser) return console.log('user already exists');

    while (user.password!=user.confirm){
        console.log('passwords donot match');
        user.password = question('create a password:')
        
    }
    delete user.confirm
    user.password = await hashpassword(user.password)

    users.push (user)
    await fs.writeFile('./users.json',JSON.stringify(users,null,4))

}

const login = async() =>{
    const username = question('please enter username')
    const password = question('enter your password')

    const data = await fs.readFile('./users.json','utf8')
    const users = JSON.parse(data)

    const user= users.find((usr)=>{
        return usr.username == username
    })
    if (!user) return console.log('user not found');
    const auth = await comaparePassword(password,user.password)
    if (!auth) return console.log('Invalid password');
    console.log('welcome'+ user.username+'!');
    
    
}

const app = async () =>{
    
}
