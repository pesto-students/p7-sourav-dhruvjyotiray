let getNumber = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber % 5 !== 0) {
    resolve(randomNumber);
  } else if (randomNumber % 5 == 0) {
    reject(randomNumber);
  }
});

getNumber
  .then((num) => {
    console.log(`${num} is RESOLVED as it is not divisible by 5`);
  })
  .catch((err) => {
    console.log(`${err} is REJECTED as it is divisble by 5`);
  })
  .finally(() => console.log("getNumber promise is fulfilled"));
