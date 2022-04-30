//https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    let firstDigit = parseInt(s[i-1]);
    if (firstDigit >= 1 && firstDigit <=9) {
      dp[i] += dp[i-1];
    }
    let firstTwoDigits = parseInt(s.substring(i-1,i+1))
    if  (firstTwoDigits >=10 && firstTwoDigits<=26 && i + 1 < dp.length) {
      dp[i+1] += dp[i-1];
    }
  }
  return dp[s.length]
};


// o(2^n)
// var numDecodings = function (s, dp={}) {
//   if (s in dp) {
//     return dp[s]
//   }

//   if (s === '') {
//     return 1;
//   }
  
//   let ways = 0;
//   let firstDigit = parseInt(s[0]);
//   if (firstDigit >= 1 && firstDigit <=9) {
//     ways += numDecodings(s.substring(1), dp)
//   }
//   let firstTwoDigits = parseInt(s.substring(0,2))
//   if  (firstTwoDigits >=10 && firstTwoDigits<=26) {
//     ways += numDecodings(s.substring(2), dp)
//   }

//   dp[s] = ways
//   return ways
// };


console.log(numDecodings("12")) // 2
console.log(numDecodings("226")) // 3
console.log(numDecodings("06")) // 0
console.log(numDecodings("106")) // 1
console.log(numDecodings("111111111111111111111111111111111111111111111")) // 1836311903

/*
  1. Find subproblems structure
  2. Find base cases
  3. Write recursive solution
  4. Time and space complexity
  5. Memoize it
  6. Tabulation
*/
