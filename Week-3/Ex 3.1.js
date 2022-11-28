//Used .reduce so that the function can accept n number of arguments
function add(...args) {
  return [...args].reduce((a, b) => {
    return a + b;
  }, 0);
}

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    let key = `${args}`;
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      cache.set(key, fn(...args));

      return cache.get(key);
    }
  };
}

const memoizeAdd = memoize(add);
