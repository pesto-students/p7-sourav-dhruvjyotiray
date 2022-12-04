function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

//The logged message would be "Count is 0"
//Reason:- With the execution createIncrement() at line number 13, the value of message's ${count} is set as the current value of count, i.e. 0.

//When increment() is excuted 3 times, the count is successfully incremented to 3. But when log() is excuted and the message is console logged, the value is ${count} is still '0' as it was previously set as such. Hence, the message logged is "Count is 0"

//Quick fix:-

// function createIncrement() {
//   let count = 0,
//     message;
//   function increment() {
//     count++;
//     message = `Count is ${count}`;
//   }
//   function log() {
//     console.log(message);
//   }
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();
