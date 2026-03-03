import fs from 'fs'


console.log('start')

fs.readFile("file.txt", 'utf8',(error,data)=>{
    if (error){
        console.log("oops")
        console.log(error)
        return
    }
    console.log(data)

})
console.log('end');

