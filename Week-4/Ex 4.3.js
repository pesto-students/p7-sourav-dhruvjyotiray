const fib = {
  n: 20,

  [Symbol.iterator]() {
    let i = 1,
      prev = 0,
      curr = 0;

    return {
      next: () => {
        if (i++ < this.n) {
          [prev, curr] = [curr, prev + curr || 1];
          return { value: prev, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...fib]);
