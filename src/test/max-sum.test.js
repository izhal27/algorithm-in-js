const maxSum = require('../max-sum');

describe('Max sum in a consecutive number', () => {
  it('should return a max number', () => {
    expect(maxSum([1, 2, 3, 4, 5], 3)).toEqual(12);
    expect(maxSum([3, 1, 1, 2, 1], 3)).toEqual(5);
    expect(maxSum([4, 1, 2, 2, 5, 6, 2, 1], 5)).toEqual(17);
    expect(maxSum([1, 2, 3, 4, 5, 6], 2)).toEqual(11);
  });

  it('should return null', () => {
    expect(maxSum([1, 2, 3, 4, 5], 6)).toEqual(null);
    expect(maxSum([1, 2, 3,], 4)).toEqual(null);
    expect(maxSum([4, 2, 3, 6, 11, 55,], 10)).toEqual(null);
    expect(maxSum([4, 2, 3, 6, 11], 7)).toEqual(null);
  });
});
