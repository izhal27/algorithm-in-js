const Stack = require('../stack');

let stack;
beforeEach(() => {
  stack = new Stack();
});

describe('Stack', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(stack).toHaveProperty('first', null);
      expect(stack).toHaveProperty('last', null);
      expect(stack).toHaveProperty('length', 0);
      expect(stack).toHaveProperty('push');
      expect(stack).toHaveProperty('pop');
    });
  });

  describe('Push & Pop items', () => {
    beforeEach(() => {
      stack.push('first');
      stack.push('second');
      stack.push('third');
      stack.push('fourth');
      stack.push('fifth');
    });

    it('should push an item', () => {
      expect(stack.push('sixth')).toBe(6);
      expect(stack.push('seventh')).toBe(7);
      expect(stack.length).toBe(7);
    });

    it('should pop an item', () => {
      const firstPop = stack.pop();
      expect(firstPop).toBe('fifth');
      expect(stack.length).toBe(4);

      expect(stack.pop()).toBe('fourth');
      expect(stack.pop()).toBe('third');
      expect(stack.pop()).toBe('second');
      expect(stack.pop()).toBe('first');
      expect(stack.length).toBe(0);
    });

    it('should return null if there is no item', () => {
      stack = new Stack();

      expect(stack.pop()).toBe(null); // or toBeFalsy()
    });
  });
});
