function hasDuplicate(arr) {
  const set = new Set(arr);
  if (set.size < arr.length) {
    return true;
  } else return false;
}

console.log(hasDuplicate([1, 2, 3, 4])); //false
console.log(hasDuplicate([1, 2, 3, 3, 4])); //true
