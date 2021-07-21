const radixSort = require('../radix-sort');

describe('Radis sort', () => {
  it('sort an array ascending', () => {
    expect(radixSort([2, 3, 4, 5, 6, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(radixSort([101, 23, 500, 12, 34])).toEqual([12, 23, 34, 101, 500]);
    expect(radixSort([6, 3, 5, 2, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(radixSort([10210, 32, 404, 505, 206, 700, 1009])).toEqual([
      32, 206, 404, 505, 700, 1009, 10210,
    ]);
  });
});
