const selectionSort = require('../selection-sort');

describe('Selection sort', () => {
  it('sort an array ascending', () => {
    expect(selectionSort([5, 1, 2, 3, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(selectionSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([6, 3, 5, 2, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(selectionSort([21, 11, 50, 32, 47, 44, 33])).toEqual([
      11, 21, 32, 33, 44, 47, 50,
    ]);
  });
});
