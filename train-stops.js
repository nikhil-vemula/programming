/* 
Pattern: Minimun distance
Find the minimum cost from start station to end station when cost btw stations are given
*/

let cost = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0]
]

function minCost(start, end) {
  // If same station or adjacent station return directly
  if (start == end || start + 1 == end) {
    return cost[start][end]
  }
  
  var mincost = cost[start][end];
  for (var i = start + 1; i <= end - 1; i++) {
    var c = minCost(start, i) + minCost(i, end);
    mincost = c < mincost ? c : mincost;
  }

  return mincost;
}

// console.log(minCost(1, 1))
// console.log(minCost(1, 2))
// console.log(minCost(0, 2))
console.log(minCost(0, 3))
