/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let max = -1;
    let curr = nums[i];
    let arr = [...nums];

    for (let j = i + 1; j < nums.length; j++) {
      let len = arr.length;

      if (arr[len - 1] > curr) max = arr.pop();
      else arr.pop();
    }

    output.push(max);
  }

  return output;
};
