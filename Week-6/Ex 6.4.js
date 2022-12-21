function maxProfitStock(prices) {
  let lowestPrice = Infinity,
    maxProfit = 0;
  //Keeping track of the lowest price found
  //& max-profit gained by selling it.

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
      continue;
    } else if (prices[i] - lowestPrice > maxProfit) {
      maxProfit = prices[i] - lowestPrice;
    }
  }
  return maxProfit;
}

console.log(maxProfitStock([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfitStock([7, 6, 4, 3, 1])); // 0

//Time complexity - O(N)
//Space complexity - O(1)
