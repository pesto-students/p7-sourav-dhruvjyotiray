//Used .reduce so that the function can accept n number of arguments
function add(...args) {
  return [...args].reduce((a, b) => {
    return a + b;
  }, 0);
}

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    console.log(cache) //cache display
    let key = `${args}`;
    if (cache.has(key)) {
      console.log("Called from cache"); //for testing
      return cache.get(key);
    } else {
      cache.set(key, fn(...args));
      console.log("Added to cache"); //for testing
      return cache.get(key);
    }
  };
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100))
console.log(memoizeAdd(100))
console.log(memoizeAdd(100, 200))
console.log(memoizeAdd(100, 100))
