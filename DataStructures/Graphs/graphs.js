class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(v1, v2) {
		// make sure each input is a valid key
		if (!this.adjacencyList[v1]) this.addVertex(v1);
		if (!this.adjacencyList[v2]) this.addVertex(v2);
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	removeEdge(v1, v2) {
		// make sure each input is a valid key
		if (!this.adjacencyList[v1]) this.addVertex(v1);
		if (!this.adjacencyList[v2]) this.addVertex(v2);
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}
	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
	DFSRecursive(start) {
		const result = [];
		const visited = {};
		const dfs = (vertex) => {
			if (!vertex) return;
			visited[vertex] = true;
			result.push(vertex);
			this.adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return dfs(neighbor);
				}
			});
		};
		dfs(start);
		return result;
	}
	DFSIterative(start) {
		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}
	BFS(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let currentVertex;
		visited[start] = true;
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));
