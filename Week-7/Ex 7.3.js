function sortArray(arr) {
  const numCount = new Map([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  for (let i = 0; i < arr.length; i++) {
    //count the number of 0s, 1s and 2s.
    if (numCount.has(arr[i])) {
      numCount.set(arr[i], numCount.get(arr[i]) + 1);
    }
  }

  return [
    ...new Array(numCount.get(0)).fill(0),
    ...new Array(numCount.get(1)).fill(1),
    ...new Array(numCount.get(2)).fill(2),
  ];
}

console.log(sortArray([0, 2, 1, 2, 0]));
console.log(sortArray([2, 2, 2, 1, 1, 1, 0, 0, 0]));

//Time complexity - O(n)
//Space complexity - O(1)
