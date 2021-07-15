const insertionSort = require('../insertion-sort');

describe('Insertion sort', () => {
  it('sort an array ascending', () => {
    expect(insertionSort([2, 3, 4, 5, 6, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(insertionSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([6, 3, 5, 2, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(insertionSort([21, 11, 50, 32, 47, 44, 33])).toEqual([
      11, 21, 32, 33, 44, 47, 50,
    ]);
  });
});
