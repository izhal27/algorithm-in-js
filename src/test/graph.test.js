const Graph = require('../graph');

let graph;
beforeEach(() => {
  graph = new Graph();
});

describe('Graph', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(graph).toHaveProperty('adjacencyList');
      expect(graph).toHaveProperty('addVertex');
      expect(graph).toHaveProperty('addEdge');
      expect(graph).toHaveProperty('removeEdge');
      expect(graph).toHaveProperty('removeVertex');
      expect(graph).toHaveProperty('DFSRecrusive');
      expect(graph).toHaveProperty('DFSIterative');
    });
  });

  describe('Add Vertex and Edge', () => {
    it('should add vertex if edge does not exist', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      expect(Object.keys(graph.adjacencyList).length).toEqual(3);
    });

    it('should ignore if vertex already in the list', () => {
      graph.addVertex('A');
      graph.addVertex('A');
      graph.addVertex('A');
      expect(Object.keys(graph.adjacencyList).length).toEqual(1);
    });

    it('should add edge between vertex', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');

      expect(graph.adjacencyList['A'].length).toEqual(2);
      expect(graph.adjacencyList['B'].length).toEqual(1);
      expect(graph.adjacencyList['C'].length).toEqual(1);
    });

    it('should ignore if vertex does not exist', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      // does not exist
      graph.addEdge('A', 'D');
      graph.addEdge('E', 'B');

      expect(graph.adjacencyList['A'].length).toEqual(2);
      expect(graph.adjacencyList['B'].length).toEqual(1);
      expect(graph.adjacencyList['C'].length).toEqual(1);
    });
  });

  describe('Remove Vertex and Edge', () => {
    beforeEach(() => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('A', 'D');
      graph.addEdge('A', 'E');
      graph.addEdge('B', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'D');
      graph.addEdge('D', 'E');
    });

    it('should remove edge between vertex', () => {
      expect(graph.adjacencyList['A'].length).toEqual(4);
      expect(graph.adjacencyList['B'].length).toEqual(3);

      graph.removeEdge('A', 'B');

      expect(graph.adjacencyList['A'].length).toEqual(3);
      expect(graph.adjacencyList['B'].length).toEqual(2);
    });

    it('should ignore if vertex does not exist', () => {
      expect(graph.adjacencyList['A'].length).toEqual(4);
      expect(graph.adjacencyList['B'].length).toEqual(3);

      graph.removeEdge('A', 'G');

      expect(graph.adjacencyList['A'].length).toEqual(4);
      expect(graph.adjacencyList['B'].length).toEqual(3);
    });

    it('should remove vertex', () => {
      expect(Object.keys(graph.adjacencyList).length).toEqual(5);
      expect(graph.adjacencyList['B'].length).toEqual(3);
      expect(graph.adjacencyList['E'].length).toEqual(2);

      graph.removeVertex('A');

      expect(Object.keys(graph.adjacencyList).length).toEqual(4);
      expect(graph.adjacencyList['B'].length).toEqual(2);
      expect(graph.adjacencyList['E'].length).toEqual(1);
    });

    it('should ignore if vertex does not exist', () => {
      graph.removeVertex('G');

      expect(Object.keys(graph.adjacencyList).length).toEqual(5);
    });
  });

  describe('Depth First Search and Breath First Search', () => {
    beforeEach(() => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');
      graph.addVertex('F');

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'E');
      graph.addEdge('D', 'E');
      graph.addEdge('D', 'F');
      graph.addEdge('E', 'F');
    });

    it('should return a list of DFS recrusive', () => {
      expect(graph.DFSRecrusive('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
      expect(graph.DFSRecrusive('B')).toEqual(['B', 'A', 'C', 'E', 'D', 'F']);
      expect(graph.DFSRecrusive('F')).toEqual(['F', 'D', 'B', 'A', 'C', 'E']);
    });

    it('should return a list of DFS iterative', () => {
      expect(graph.DFSIterative('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
      expect(graph.DFSIterative('B')).toEqual(['B', 'D', 'F', 'E', 'C', 'A']);
      expect(graph.DFSIterative('F')).toEqual(['F', 'E', 'C', 'A', 'B', 'D']);
    });
  });
});
