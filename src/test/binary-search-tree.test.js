const BinarySearchTree = require('../binary-search-tree');

let bst;
beforeEach(() => {
  bst = new BinarySearchTree();
});

describe('Binary search tree', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(bst).toHaveProperty('root');
      expect(bst).toHaveProperty('insert');
      expect(bst).toHaveProperty('find');
      expect(bst).toHaveProperty('BFS');
    });
  });

  describe('Insert', () => {
    it('should insert an item', () => {
      expect(bst.insert(27)).toBeTruthy();
      expect(bst.insert(3)).toBeTruthy();
      expect(bst.insert(87)).toBeTruthy();
      expect(bst.root.value).toBe(27);
      expect(bst.root.left.value).toBe(3);
      expect(bst.root.right.value).toBe(87);
      expect(bst.insert(3)).toBeFalsy(); // duplicate
    });
  });

  describe('Find & Contains', () => {
    beforeEach(() => {
      bst.insert(87);
      bst.insert(7);
      bst.insert(47);
      bst.insert(27);
      bst.insert(55);
      bst.insert(35);
      bst.insert(15);
    });

    it('should find an item', () => {
      expect(bst.find(55).value).toBe(55);
      expect(bst.find(27).value).toBe(27);
      expect(bst.find(87).value).toBe(87);
      expect(bst.find(15).value).toBe(15);
    });

    it('should return true if contain an item', () => {
      expect(bst.contains(55)).toBeTruthy();
      expect(bst.contains(27)).toBeTruthy();
      expect(bst.contains(87)).toBeTruthy();
      expect(bst.contains(15)).toBeTruthy();
    });

    it('should return undefined or false if not found', () => {
      expect(bst.find(1)).toBeFalsy();
      expect(bst.find(78)).toBeFalsy();
      expect(bst.contains(34)).toBeFalsy();
      expect(bst.contains(44)).toBeFalsy();
    });
  });

  describe('Breath first search & Depth first search', () => {
    beforeEach(() => {
      bst.insert(87);
      bst.insert(7);
      bst.insert(207);
      bst.insert(27);
      bst.insert(5);
      bst.insert(101);
      bst.insert(303);
    });

    it('should match return value with BFS', () => {
      expect(bst.BFS()).toStrictEqual([87, 7, 207, 5, 27, 101, 303]);
    });
  });
});
