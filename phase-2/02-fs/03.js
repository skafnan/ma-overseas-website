
import fs from 'fs'

fs.readFile('file.txt', 'utf-8', (error,data)=>{
    if (err) return console.log(err);
    console.log(data);
    let temp = data

    fs.readFile('file2.txt','utf-8', (err,data2)=>{
        console.log(data2);
        temp +=data2

        fs.writeFile('output.txt',temp,(err)=>{
            fs.writeFile('output.txt', temp,(err)=>{
                if(err) return console.log(err)
                    console.log('write sucess');
                    
            })
        })
        
    })
    
    
})