const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [] 
}

const bfs = (graph, src) => {
	let queue = [ src ];
	while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}

bfs(graph, 'a'); // abcdef