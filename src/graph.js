const Stack = require('./stack');
const Queue = require('./queue');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return;
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return;
    }

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    const listOfedges = this.adjacencyList[vertex];
    for (let edges of listOfedges) {
      this.removeEdge(vertex, edges);
    }

    delete this.adjacencyList[vertex];
  }

  DFSRecrusive(startVertex) {
    const result = [];
    const visited = {};

    const DFS = (vertex) => {
      if (!vertex) {
        return null;
      }

      result.push(vertex);
      visited[vertex] = true;

      for (let neighborhood of this.adjacencyList[vertex]) {
        if (!visited[neighborhood]) {
          DFS(neighborhood);
        }
      }
    };

    DFS(startVertex);
    return result;
  }

  DFSIterative(startVertex) {
    const result = [];
    const stack = new Stack();
    stack.push(startVertex);
    const visited = {};
    visited[startVertex] = true;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighborhood) => {
        if (!visited[neighborhood]) {
          visited[neighborhood] = true;
          stack.push(neighborhood);
        }
      });
    }

    return result;
  }

  BFS(startVertex) {
    const result = [];
    const queue = new Queue();
    queue.enqueue(startVertex);
    const visited = {};
    visited[startVertex] = true;

    while (queue.length) {
      const vertex = queue.dequeue();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighborhood) => {
        if (!visited[neighborhood]) {
          visited[neighborhood] = true;
          queue.enqueue(neighborhood);
        }
      });
    }

    return result;
  }
}

module.exports = Graph;
