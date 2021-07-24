const SinglyLinkedList = require('../singly-linked-list');

let list = null;

beforeEach(() => {
  list = new SinglyLinkedList();
});

describe('Singly linked list', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(list).toHaveProperty('head', null);
      expect(list).toHaveProperty('tail', null);
      expect(list).toHaveProperty('length', 0);
      expect(list).toHaveProperty('push');
      expect(list).toHaveProperty('pop');
      expect(list).toHaveProperty('shift');
      expect(list).toHaveProperty('unshift');
      expect(list).toHaveProperty('get');
      expect(list).toHaveProperty('set');
      expect(list).toHaveProperty('insert');
      expect(list).toHaveProperty('remove');
      expect(list).toHaveProperty('reverse');
    });
  });

  describe('Push & Pop items', () => {
    beforeEach(() => {
      list.push('hello world');
      list.push('testing');
      list.push('hello there');
    });

    it('should push an item to list', () => {
      expect(list.length).toBe(3);
    });

    it('should have same value', () => {
      expect(list.head.value).toBe('hello world');
      expect(list.head.next.value).toBe('testing');
      expect(list.tail.value).toBe('hello there');
    });

    it('should pop an item from list', () => {
      list.pop(); // hello there
      const removedNode = list.pop();

      expect(list.length).toBe(1);
      expect(removedNode.value).toBe('testing');
      expect(removedNode.next).toBeFalsy();
    });

    it('should have one item/head and tail only', () => {
      list.pop(); // hello there
      const removedTailNode = list.pop();

      expect(list.length).toBe(1);
      expect(removedTailNode.value).toBe('testing');
      expect(removedTailNode.next).toBeFalsy();
      expect(list.head.value).toBe('hello world');
      expect(list.head.next).toBeFalsy();
      expect(list.tail.value).toBe('hello world');
      expect(list.tail.next).toBeFalsy();
    });

    it('should have no head or tail', () => {
      list.pop(); // hello there
      list.pop(); // testing
      const removedTailNode = list.pop(); // hello world

      expect(list.length).toBe(0);
      expect(removedTailNode.value).toBe('hello world');
      expect(removedTailNode.next).toBeFalsy();
      expect(list.head).toBeFalsy();
      expect(list.tail).toBeFalsy();
    });

    it('should return undefined if have no item', () => {
      list.pop(); // hello world
      list.pop(); // testing
      list.pop(); // hello there

      expect(list.pop()).toBeFalsy(); // or toBe(undefined)
    });
  });

  describe('Shift and Unshift items', () => {
    beforeEach(() => {
      list.unshift('first');
      list.unshift('second');
      list.unshift('third');
      list.unshift('fourth');
      list.unshift('fifth');
    });

    it('should insert at the beginning', () => {
      expect(list.length).toBe(5);
      expect(list.head.value).toBe('fifth');
      expect(list.tail.value).toBe('first');
    });

    it('should remove item at the beginning', () => {
      const removedNode = list.shift();

      expect(list.length).toBe(4);
      expect(removedNode.value).toBe('fifth');
      expect(removedNode.next).toBeFalsy();
      expect(list.head.value).toBe('fourth');
      expect(list.tail.value).toBe('first');
    });

    it('should have no head or tail', () => {
      list.shift(); // fifth
      list.shift(); // fourth
      list.shift(); // third
      list.shift(); // second
      list.shift(); // first

      expect(list.length).toBe(0);
      expect(list.head).toBeFalsy();
      expect(list.tail).toBeFalsy();
    });

    it('should return undefined if have no item', () => {
      list.shift(); // fifth
      list.shift(); // fourth
      list.shift(); // third
      list.shift(); // second
      list.shift(); // first

      expect(list.length).toBe(0);
      expect(list.shift()).toBeFalsy(); // or toBe(undefined)
    });
  });

  describe('Get and Set', () => {
    beforeEach(() => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.push(6);
    });

    it('should return null if index lower than zero or out of bounds', () => {
      expect(list.get(-1)).toBe(null);
      expect(list.get(6)).toBe(null);
      expect(list.get(8)).toBe(null);
    });

    it('should return a node with given index', () => {
      expect(list.get(4).value).toBe(5);
      expect(list.get(2).value).toBe(3);
      expect(list.get(0).value).toBe(1);
      expect(list.get(5).value).toBe(6);
    });

    it('should update the node with new value', () => {
      list.set(2, 33);
      list.set(5, 66);

      expect(list.set(0, 11)).toBeTruthy();
      expect(list.get(2).value).toBe(33);
      expect(list.get(5).value).toBe(66);
      expect(list.set(8, 77)).toBeFalsy();
    });
  });

  describe('Insert and Remove', () => {
    beforeEach(() => {
      list.push(34);
      list.push(27);
      list.push(13);
      list.push(24);
      list.push(51);
      list.push(86);
    });

    it('should can insert an item into a spesific index', () => {
      expect(list.get(0).value).toBe(34);
      expect(list.get(1).value).toBe(27);
      expect(list.get(3).value).toBe(24);
      expect(list.get(5).value).toBe(86);
      expect(list.length).toBe(6);

      expect(list.insert(0, 10)).toBeTruthy();
      expect(list.length).toBe(7);
      expect(list.insert(1, 44)).toBeTruthy();
      expect(list.length).toBe(8);
      expect(list.insert(3, 68)).toBeTruthy();
      expect(list.length).toBe(9);
      expect(list.insert(5, 9)).toBeTruthy();
      expect(list.length).toBe(10);
      expect(list.insert(10, 99)).toBeTruthy();
      expect(list.length).toBe(11);

      expect(list.get(0).value).toBe(10);
      expect(list.get(1).value).toBe(44);
      expect(list.get(3).value).toBe(68);
      expect(list.get(5).value).toBe(9);
      expect(list.get(10).value).toBe(99);
    });

    it('should return false if index lower than 0 or greater than the length', () => {
      expect(list.insert(-1, 1)).toBeFalsy();
      expect(list.insert(17, 45)).toBeFalsy();
    });

    it('should remove an item with given index', () => {
      expect(list.length).toBe(6);

      let removedNode = list.remove(0);
      expect(removedNode.value).toBe(34);
      expect(removedNode.next).toBeFalsy();
      expect(list.length).toBe(5);

      removedNode = list.remove(4);
      expect(removedNode.value).toBe(86);
      expect(removedNode.next).toBeFalsy();
      expect(list.length).toBe(4);

      removedNode = list.remove(2);
      expect(removedNode.value).toBe(24);
      expect(removedNode.next).toBeFalsy();
      expect(list.length).toBe(3);
    });
  });

  describe('Reverse', () => {
    beforeEach(() => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
    });

    it('should reverse', () => {
      list.reverse();

      expect(list.head.value).toBe(5);
      expect(list.get(1).value).toBe(4);
      expect(list.get(2).value).toBe(3);
      expect(list.get(3).value).toBe(2);
      expect(list.tail.value).toBe(1);
    });
  });
});
