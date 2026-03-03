import { questionInt } from "readline-sync";
let timer= questionInt('enter the time in secs')

for (let i=timer;i>=0;i--){
    setTimeout(()=>{
    console.log(i)
    
},(timer-i)*1000)

    
}