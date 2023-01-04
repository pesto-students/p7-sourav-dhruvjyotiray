function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

//Was not able to import the functions from another file, hence wrote the functions above.
//Wrapped all the test functions inside 'describe', as mentioned in the 1:1 call.

describe('testing arithmetic operations', ()=>{

    test("addition of two numbers goes as expected", () => {
        const result = add(10, 20)
      expect(result).toBe(30);
    });
    
    
    test("addition of two numbers goes as expected", () => {
        const result = subtract(10, 20)
      expect(result).toBe(-10);
    });
    
    test("addition of two numbers goes as expected", () => {
        const result = product(10, 20)
      expect(result).toBe(200);
    });


});