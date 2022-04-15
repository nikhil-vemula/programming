/*
  Find length of largest substring whose halves have equal sum
*/

// Pass 1: Consider all substring to find string with eqaul half sum
// O(n^3)
function pass1(num) {
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

// Pass 2: Avoid two loops
function pass2(num) {
  var max = -1
  var arr = num.split('').map(Number);

  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j <= arr.length; j+=2) {
        var l = j - i
        if (l > max) {
          var midl = l / 2
          var leftSum = 0
          var rightSum = 0
          // Avoid two loops
          for (var itr = 0; itr < midl; itr++) {
            leftSum += arr[i+itr]
            rightSum += arr[i+midl+itr]
          }
          if (leftSum == rightSum)
            max = l
        }
    }
  }
  return max
}

console.log(pass2("142124")) // 6
console.log(pass2("9430723")) // 4

// function substrings(str) {
//   for (var i = 0; i < str.length; i++) {
//     for (var j = i+1; j <= str.length; j++) {
//       console.log(str.substring(i, j))
//     }
//   }
// }

// substrings("1234")