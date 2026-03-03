import fs from 'fs'

fs.writeFile('user1.txt','utf-8',(err,data)=>{
    if (err) return console.log(err);
    console.log(data);
    const users = JSON.parse(data)
    console.log(users[0]);
    
    
    
})