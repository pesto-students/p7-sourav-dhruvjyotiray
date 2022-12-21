//Max Sum Contiguous Subarray:

function maxSubArray(arr) {
  let maxSubArr = arr[0],
    maxTillNow = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    maxSubArr = Math.max(arr[i], maxSubArr + arr[i]);
    //Kadane's algorithm
    maxTillNow.push(maxSubArr);
  }

  return Math.max.apply(null, maxTillNow);
}

console.log(maxSubArray([1, 2, 3, 4, -10])); //10
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6

//Time complexity - O(n)
//Space complexity  - O(n)
