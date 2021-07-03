const sumZero = require('../sum-zero');

describe('Find sum zero between two numbers in a sorted array', () => {
  it('should return an array with two number sum zero', () => {
    expect(sumZero([-6, -5, -4, -3, -2, -1, 0, 1, 2])).toBeTruthy();
    expect(sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual([-4, 4]);
    expect(sumZero([-8, -7, -6, -1, 0, 1, 2, 3, 4, 5])).toEqual([-1, 1]);
    expect(sumZero([-7, -6, -4, -3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  });

  it('should return undefined/false', () => {
    expect(sumZero([-6, -5, -2, 0, 1, 3, 4])).toEqual(undefined);
    expect(sumZero([-3, -2, -1, 0, 4, 5, 6])).toBeFalsy();
    expect(sumZero([-7, -6, -5, -1, 0, 2, 3, 4])).toBeFalsy();
  });
});
