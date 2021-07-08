const areThereDuplicates = require('../are-there-duplicates');

describe('Check if there are duplicates value', () => {
  it('should return true', () => {
    expect(areThereDuplicates(1, 1)).toBeTruthy();
    expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
    expect(areThereDuplicates(1, 1, 2)).toBeTruthy();
    expect(areThereDuplicates(3, 5, 6, 3, 1, 2)).toBeTruthy();
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
    expect(areThereDuplicates('a', 'e', 'c', 'd', 'a', 'b')).toBeTruthy();
  });

  it('should return false', () => {
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
    expect(areThereDuplicates(1, 2, 3, 4)).toBeFalsy();
    expect(areThereDuplicates(1, 2, 3, 4, 5)).toBeFalsy();
    expect(areThereDuplicates(3, 5, 1, 8, 7, 4, 2, 9)).toBeFalsy();
  });
});
