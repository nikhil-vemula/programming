// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// O(n)
var maxProfit = function(prices) {
  let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        let currentProfit = prices[i] - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }
    return maxProfit;
};

// O(n^2)
// var maxProfit = function(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       profit = prices[j] - prices[i];
//       maxProfit = profit > maxProfit ? profit : maxProfit;
//     }
//   }
//   return maxProfit;
// };

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0