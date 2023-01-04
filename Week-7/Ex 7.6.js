function threeSumClosest(nums, target) {
  let array = nums.sort((a, b) => {
    return a - b;
  });
  //sorting array to make it usable for two-pointer
  let closest = Infinity,
    sum;

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let total = array[i] + array[left] + array[right];

      if (total === target) return total;
      else if (total < target) left++;
      else if (total > target) right--;

      if (Math.abs(total - target) < closest) {
        //storing the sum of 3 numbers closest to the target
        closest = Math.abs(total - target);
        sum = total;
      }
    }
  }

  return sum;
}

console.log(threeSumClosest([-1, 2, -1, 4], 1)); //-1+2+(-1) = 2
console.log(threeSumClosest([-1, 2, -1, 4], 4)); //4+(-1)+2 = 5

//Time complexity - O(n^2)
//Space complexity - O(n)
