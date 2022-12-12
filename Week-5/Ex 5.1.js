//With generators:

function doTaskGen1() {
  console.log("A");
}
function doTaskGen2() {
  console.log("B");
}

function doTaskGen3() {
  console.log("C");
}

function* genTasks(callbackA, callbackB, callbackC) {
  yield setTimeout(callbackA, 500);
  yield setTimeout(callbackB, 500);
  yield setTimeout(callbackC, 500);
}

const iterator = genTasks(doTaskGen1, doTaskGen2, doTaskGen3);

iterator.next();
iterator.next();
iterator.next();

// with Async/Await:

async function execute() {
  try {
    await doTask1();
    await doTask2();
    await doTask3();
  } catch (err) {
    console.log(arr);
  }
}

async function doTasks(callback) {
  await callback();
}

doTasks(execute);

function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(10);
      resolve();
    }, 1500);
  });
}
function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(100);
      resolve();
    }, 1000);
  });
}
function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1000);
      resolve();
    }, 1000);
  });
}
