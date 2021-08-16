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
});
