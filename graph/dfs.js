const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [] 
}

// recurion
// const dfs = (graph, src) => {
//   console.log(src);
//   for (let neighbor of graph[src]) {
//     dfs(graph, neighbor);
//   }
// }

const dfs = (graph, src) => {
	let stack = [ src ];
	while (stack.length > 0) {
		let current = stack.pop();
		console.log(current);
		for (let neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
}

dfs(graph, 'a'); // abdfce