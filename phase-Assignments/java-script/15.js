// 15. Write an async function that waits for 2 seconds and then logs
// "Process Completed".


async function processTask() {
  await new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });

  console.log("Process Completed");
}


processTask();