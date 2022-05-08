let graph = {
  '0': ['1', '5', '8'],
  '1': ['0'],
  '5': ['0', '8'],
  '8': ['0', '5'],
  '4': ['2', '3'],
  '2': ['3', '4'],
  '3': ['2', '3']
}

const largestComponent = (graph) => {
  let visited = new Set();
  let max = 0;
  for (let key of Object.keys(graph)) {
    if(visited.has(key)) continue;
    let component = dfs(graph, key, visited);
    max  = component.length > max ? component.length : max;
  }
  return max;
}

const dfs = (graph, src, visited) => {
  let component = [];
  let stack = [ src ];
  while (stack.length > 0) {
    let current = stack.pop();
    if (visited.has(current)) continue;
    component.push(current);
    visited.add(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return component;
}

console.log(largestComponent(graph)); // 4