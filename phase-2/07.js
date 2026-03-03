console.log('hello');
setTimeout((id)  => {
    const user ={
        name: 'afnan',
        age : 23
    };
    console.log(`user id:${id} : user name: ${user.name}, user
    age :  ${user.age}`);
},5000,1200);

    setTimeout(() => {
        console.log('i am first')
    }, 1000);

    setTimeout(() => {
        console.log('i am secound')
    }, 1500);


