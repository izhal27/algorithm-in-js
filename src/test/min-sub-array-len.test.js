const { minSubArrayLen, minSubArrayLen2 } = require('../min-sub-array-len');

describe('Find min length of sub array', () => {
  it('should return a number', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(
      1
    );
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5);
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2);
  });

  it('should return 0', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0);
  });
});

describe('Find min length of sub array version 2', () => {
  it('should return a number', () => {
    expect(minSubArrayLen2([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
    expect(minSubArrayLen2([2, 1, 6, 5, 4], 9)).toEqual(2);
    expect(minSubArrayLen2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(
      1
    );
    expect(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3);
    expect(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5);
    expect(minSubArrayLen2([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2);
  });

  it('should return 0', () => {
    expect(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0);
  });
});
