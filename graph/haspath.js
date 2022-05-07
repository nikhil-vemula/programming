const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  
  let stack = [src];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

console.log(hasPath(graph,'f', 'k')); // true
console.log(hasPath(graph,'f', 'j')); // false