function createStack() {
  let results = {
    items: [],
  };
  
  return {
    push: function (item) {
      return results.items.push(item);
    },
    pop: function () {
      return results.items.pop();
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
