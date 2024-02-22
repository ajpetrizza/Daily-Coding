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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Kyoto");
g.addVertex("Osaka");
g.addVertex("Nara");
g.addEdge("Tokyo", "Kyoto");
g.addEdge("Tokyo", "Osaka");
g.addEdge("Tokyo", "Nara");
g.addEdge("Kyoto", "Osaka");
g.addEdge("Kyoto", "Nara");
g.removeEdge("Tokyo", "Kyoto");
console.log(g.adjacencyList);
