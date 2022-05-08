const graph = {
  'w': ['x', 'v'],
  'x': ['w', 'y'],
  'v': ['w', 'z'],
  'y': ['x', 'z'],
  'z': ['y', 'v']
};

const shortestPath = (graph, src, dst) => {
  let visited = new Set();
  let queue = [[src, 0]];
  while (queue.length > 0) {
    let [current, distance] = queue.shift();
    if (current === dst) return distance;
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
}

console.log(shortestPath(graph, 'w', 'z')); // 2