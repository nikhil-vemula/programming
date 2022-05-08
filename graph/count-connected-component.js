let graph = {
  '3': [],
  '4': ['6'],
  '6': ['4', '5', '7', '8'],
  '8': ['6'],
  '7': ['6'],
  '5': ['6'],
  '1': ['2'],
  '2': ['1']
}

const numberOfConnectedComponents = (graph) => {
  let count = 0;
  let visited = new Set();
  for (let key of Object.keys(graph)) {
    if (dfs(graph, key, visited)) {
      count++;
    }
  }
  return count;
}

const dfs = (graph, src, visited) => {
  if (visited.has(src))
    return false;

  let stack = [ src ];
  while (stack.length > 0) {
    let current = stack.pop();
    if (visited.has(current)) continue;
    visited.add(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return true;
}

console.log(numberOfConnectedComponents(graph)); // 3