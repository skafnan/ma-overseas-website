
// let n = 10
// let sum =0

// import { log } from "node:console"

// for (let i =1; i<=n; i++){
//     sum = sum + i
//     console.log(i);
// }









// function outterfun (a){

//     function innerfun (){
//     console.log(innerfun);
    
//     }
//     return innerfun
// }
// outterfun(5)
// console.log(outterfun());

// function runtask (task){
//     task()}
// function sayhello (){
//     console.log('hello');
    
// }



// runtask(sayhello)


// function letseat (food){
//     console.log('lets eat food');
    
//     food()

// }
// function butwhere(){
//     console.log('in a resturant ');
    
// }

// letseat(butwhere)



import express from "express";

const app = express();

// route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});









