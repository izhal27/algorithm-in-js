const mergeSort = require('../merge-sort');

describe('Merge sort', () => {
  it('sort an array ascending', () => {
    expect(mergeSort([2, 3, 4, 5, 6, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([6, 3, 5, 2, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([21, 11, 50, 32, 47, 44, 33])).toEqual([
      11, 21, 32, 33, 44, 47, 50,
    ]);
  });
});
