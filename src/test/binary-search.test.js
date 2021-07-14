const binarySearch = require('../binary-search');

describe('Find an index of item in a sorted array', () => {
  it('should return an index of item', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    expect(binarySearch([21, 32, 43, 54, 58, 60, 65], 65)).toEqual(6);
    expect(binarySearch([-10, -8, -6, -4, -3, -1, 0], -8)).toEqual(1);
  });

  it('should return -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toEqual(-1);
  });
});
