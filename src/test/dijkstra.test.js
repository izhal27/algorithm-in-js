const WeightedGraph = require('../dijkstra');

let graph;
beforeEach(() => {
  graph = new WeightedGraph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');

  graph.addEdge('A', 'B', 4);
  graph.addEdge('A', 'C', 2);
  graph.addEdge('B', 'E', 3);
  graph.addEdge('C', 'D', 2);
  graph.addEdge('C', 'F', 4);
  graph.addEdge('D', 'E', 3);
  graph.addEdge('D', 'F', 1);
  graph.addEdge('E', 'F', 1);
});

describe('Dijkstra algorithm', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(graph).toHaveProperty('adjacencyList');
      expect(graph).toHaveProperty('addVertex');
      expect(graph).toHaveProperty('addEdge');
      expect(graph).toHaveProperty('dijkstra');
    });
  });

  describe('Find the shortest path', () => {
    it('should return the shortest path', () => {
      expect(graph.dijkstra('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
      expect(graph.dijkstra('A', 'C')).toEqual(['A', 'C']);
      expect(graph.dijkstra('A', 'F')).toEqual(['A', 'C', 'D', 'F']);
    });
  });
});
