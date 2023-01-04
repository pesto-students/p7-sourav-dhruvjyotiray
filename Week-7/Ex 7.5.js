function pairWithDifference(array, target) {
  const complementMap = new Map();

  for (let i = 0; i < array.length; i++) {
    if (complementMap.has(array[i])) return 1;
    //if the current number previously had a complement which
    //made their difference = target, we return true/1
    else {
      let difference = array[i] + target;
      complementMap.set(difference, "stored");
      //store the complement value in map, traverse through the
      //array to check if a complement exists.
    }
  }
  return 0;
}

console.log(pairWithDifference([5, 10, 3, 2, 50, 80, 89], 79)); //true
console.log(pairWithDifference([-10, 20], 30)); //true

//Time complexity - O(n)
//Space complexity - O(n)
