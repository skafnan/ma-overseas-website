// 20. Create a simple timer app using setInterval() that counts down from 5
// to 0, then prints "Time’s up!".

let count = 5;

let timer = setInterval(function () {
  console.log(count);

  count--;

  if (count < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);