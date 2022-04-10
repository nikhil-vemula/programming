/*
  Find length of largest substring whose halves have equal sum
*/

function lengthOfLargestSubstringWithEqualHalvesSum(num) {
  var max = -1
  var arr = num.split('').map(Number);

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j <= arr.length; j++) {
        var l = j - i
        // Consider only even substrings
        // Consider string only greater than max length
        if (l % 2 == 0 && l > max) {
          var mid = (j + i) / 2
          var leftSum = 0
          for (var itr = i; itr < mid; itr++) leftSum += arr[itr]
          var rightSum = 0
          for (var itr = mid; itr < j; itr++) rightSum += arr[itr]
          if (leftSum == rightSum)
            max = (j - i) > max ? j- i : max 
        }
    }
  }
  return max
}

console.log(lengthOfLargestSubstringWithEqualHalvesSum("142124"))
// console.log(lengthOfLargestSubstringWithEqualHalvesSum("9430723"))

// function substrings(str) {
//   for (var i = 0; i < str.length; i++) {
//     for (var j = i+1; j <= str.length; j++) {
//       console.log(str.substring(i, j))
//     }
//   }
// }

// substrings("1234")