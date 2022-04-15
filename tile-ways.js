/*
Find the number of ways the 2x1 tile can be placed on 2xn space
*/

/*
if tile is placed vertically the remaining space is 2x(n-1)
if tile is placed horizontally them the we also need to place another tile resulting in 2x(n-2) space which is a subproblem
*/
function f(n) {
  if (n == 1)
    return 1
  
  if (n == 2)
    return 2
  
  return f(n-1) + f(n-2);
}

function f1(n) {
  if (n == 1)
    return 1;

  if (n == 2)
    return 2;

  var t1 = 1, t2 = 2;
  for (var i=3; i <= n; i++) {
    var temp = t1 + t2;
    t1 = t2;
    t2 = temp;
  }
  return t2;
}

console.log(f1(1)) // 1
console.log(f1(2)) // 2
console.log(f1(3)) // 3
console.log(f1(4)) // 5
console.log(f1(5)) // 8