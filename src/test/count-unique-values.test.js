const {
  countUniqueValues,
  countUniqueValues2,
} = require('../count-unique-values');

describe('Count unique values version 1', () => {
  it('should return value', () => {
    expect(countUniqueValues([])).toEqual(0);
    expect(countUniqueValues([1, 2, 3, 4, 5])).toEqual(5);
    expect(countUniqueValues([-1, 0, 1, 1, 3])).toEqual(4);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
    expect(countUniqueValues([1, 1, 1, 1, 5])).toEqual(2);
    expect(countUniqueValues([1, 5, 7])).toEqual(3);
    expect(countUniqueValues2([-5, -5, -3, -2, 0, 1, 4])).toEqual(6);
  });
});

describe('Count unique values version 2', () => {
  it('should return value', () => {
    expect(countUniqueValues2([])).toEqual(0);
    expect(countUniqueValues2([1, 2, 3, 4, 5])).toEqual(5);
    expect(countUniqueValues2([-1, 0, 1, 1, 3])).toEqual(4);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
    expect(countUniqueValues2([1, 1, 1, 1, 5])).toEqual(2);
    expect(countUniqueValues2([1, 5, 7])).toEqual(3);
    expect(countUniqueValues2([-5, -5, -3, -2, 0, 1, 4])).toEqual(6);
  });
});
