const averagePair = require('../average-pair');

describe('Check there is a pair of average', () => {
  it('should return true', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  });

  it('should return false', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
    expect(averagePair([], 4)).toBeFalsy();
  });
});
