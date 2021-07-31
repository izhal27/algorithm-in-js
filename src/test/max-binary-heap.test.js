const MaxBinaryHeap = require('../max-binary-heap');

let mbh;
beforeEach(() => {
  mbh = new MaxBinaryHeap();
});

describe('Max binary heap implementation', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(mbh).toHaveProperty('values');
      expect(mbh).toHaveProperty('insert');
      expect(mbh).toHaveProperty('extractMax');
    });
  });

  describe('Insert & Extract max value', () => {
    beforeEach(() => {
      mbh.values = [87, 50, 15, 40, 27, 12, 5];
    });

    it('should insert an item', () => {
      expect(mbh.insert(107)).toStrictEqual([107, 87, 15, 50, 27, 12, 5, 40]);
      expect(mbh.insert(1)).toStrictEqual([107, 87, 15, 50, 27, 12, 5, 40, 1]);
      expect(mbh.insert(39)).toStrictEqual([
        107, 87, 15, 50, 39, 12, 5, 40, 1, 27,
      ]);
    });

    it('should return a max value', () => {
      expect(mbh.extractMax()).toBe(87);
      expect(mbh.extractMax()).toBe(50);
      expect(mbh.extractMax()).toBe(40);
      expect(mbh.extractMax()).toBe(27);
      expect(mbh.extractMax()).toBe(15);
      expect(mbh.extractMax()).toBe(12);
      expect(mbh.extractMax()).toBe(5);
      expect(mbh.values).toStrictEqual([]);
      expect(mbh.extractMax()).toBe(null);
    });

    it('should return null if have no item', () => {
      mbh = new MaxBinaryHeap();
      expect(mbh.extractMax()).toBe(null);
    });
  });
});
