function createStack() {
  let child = function () {
    return { items: [] };
  };

  let execute = child();

  return {
    push: function (item) {
      return execute.items.push(item);
    },
    pop: function () {
      return execute.items.pop();
    },
  };
}
const stack = createStack();

stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
stack.push(999); //=> 999 is added to the array
console.log(stack.pop()); // => 999
console.log(stack.items); // => still undefined
