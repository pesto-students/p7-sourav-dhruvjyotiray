function vowelCount(word) {
  const vowels = "aeiou".split("");
  const vowelMap = new Map();
  let current;

  for (let i = 0; i < word.length; i++) {
    current = word[i].toLowerCase();
    if (vowels.includes(current)) {
      if (vowelMap.has(current)) {
        vowelMap.set(current, vowelMap.get(current) + 1);
      } else vowelMap.set(current, 1);
    }
  }

  return vowelMap;
}

console.log(vowelCount("elephant"));
console.log(vowelCount("umbrella"));
