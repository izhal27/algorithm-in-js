const { maxSubarraySum, maxSubarraySum2 } = require('../max-sub-array-sum');

describe('Find the maximum sum of an array', () => {
  it('should return the sum', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  });

  it('should return null', () => {
    expect(maxSubarraySum([2, 3], 3)).toEqual(null);
  });
});

describe('Find the maximum sum of an array version 2', () => {
  it('should return the sum', () => {
    expect(maxSubarraySum2([100, 200, 300, 400], 2)).toEqual(700);
    expect(maxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
    expect(maxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
    expect(maxSubarraySum2([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  });

  it('should return null', () => {
    expect(maxSubarraySum2([2, 3], 3)).toEqual(null);
  });
});
