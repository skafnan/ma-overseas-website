console.log('hi')
for (var i=0; i<5; i++){
    console.log(i)
    setTimeout(()=>{
        console.log(i)

    },5000),
    console.log('bye')
    console.log(i)
}