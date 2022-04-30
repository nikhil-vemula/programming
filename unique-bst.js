// https://leetcode.com/problems/unique-binary-search-trees/


var numTrees = function(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i=2; i <= n; i++) {
    for(let j=0; j < i; j++) {
      dp[i] += dp[j] * dp[i-1-j];
    }
  }
  return dp[n]
};

// var numTrees = function(n, dp={}) {
//   if (n in dp) return dp[n];

//   if (n === 0 || n == 1)
//       return 1;
  
//   let count = 0;
//   for (let i=1; i <= n; i++) {
//       let ltree = numTrees(i-1, dp);
//       let rtree = numTrees(n-i, dp);
//       count += ltree * rtree;
//   }
//   dp[n] = count;
//   return count;
// };

console.log(numTrees(3)) // 5
console.log(numTrees(2)) // 2
console.log(numTrees(1)) // 1