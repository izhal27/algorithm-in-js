const PriorityQueue = require('../priority-queue');

let pq;
beforeEach(() => {
  pq = new PriorityQueue();
});

describe('Max binary heap implementation', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(pq).toHaveProperty('values');
      expect(pq).toHaveProperty('enqueue');
      expect(pq).toHaveProperty('dequeue');
    });
  });

  describe('Enqueue & Dequeue', () => {
    beforeEach(() => {
      pq.enqueue('liverpool', 4);
      pq.enqueue('chelsea', 2);
      pq.enqueue('manchester united', 3);
      pq.enqueue('arsenal', 1);
    });

    it('should enqueue an item', () => {
      function Node(value, priority) {
        this.value = value;
        this.priority = priority;
      }

      expect(pq.enqueue('manchester city', 5)).toBeTruthy();
      expect(pq.values).toEqual([
        new Node('arsenal', 1),
        new Node('chelsea', 2),
        new Node('manchester united', 3),
        new Node('liverpool', 4),
        new Node('manchester city', 5),
      ]);
    });

    it('should return an item with high priority', () => {
      expect(pq.dequeue().value).toBe('arsenal');
      expect(pq.dequeue().value).toBe('chelsea');
      expect(pq.dequeue().value).toBe('manchester united');
      expect(pq.dequeue().value).toBe('liverpool');
      expect(pq.values).toStrictEqual([]);
      expect(pq.dequeue()).toBe(null);
    });

    it('should return null if have no item', () => {
      pq = new PriorityQueue();
      expect(pq.dequeue()).toBe(null);
    });
  });
});
