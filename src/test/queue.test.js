const Queue = require('../queue');

let queue;
beforeEach(() => {
  queue = new Queue();
});

describe('Queue', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(queue).toHaveProperty('first', null);
      expect(queue).toHaveProperty('last', null);
      expect(queue).toHaveProperty('length', 0);
      expect(queue).toHaveProperty('enqueue');
      expect(queue).toHaveProperty('dequeue');
    });
  });

  describe('Enqueue & Dequeue items', () => {
    beforeEach(() => {
      queue.enqueue('first');
      queue.enqueue('second');
      queue.enqueue('third');
      queue.enqueue('fourth');
      queue.enqueue('fifth');
    });

    it('should enqueue an item', () => {
      expect(queue.enqueue('sixth')).toBe(6);
      expect(queue.enqueue('seventh')).toBe(7);
      expect(queue.length).toBe(7);
    });

    it('should dequeue an item', () => {
      const firstDequeue = queue.dequeue();
      expect(firstDequeue).toBe('first');
      expect(queue.length).toBe(4);

      expect(queue.dequeue()).toBe('second');
      expect(queue.dequeue()).toBe('third');
      expect(queue.dequeue()).toBe('fourth');
      expect(queue.dequeue()).toBe('fifth');
      expect(queue.length).toBe(0);

      expect(queue.dequeue()).toBe(null);
    });

    it('should return null if there is no item', () => {
      queue = new Queue();

      expect(queue.dequeue()).toBe(null); // or toBeFalsy()
    });
  });
});
