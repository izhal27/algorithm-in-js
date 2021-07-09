const { isSubsequence, isSubsequence2 } = require('../is-subsequence');

describe('Check if two strings is subsequence', () => {
  it('should return true', () => {
    expect(isSubsequence('hello', 'hello world')).toBeTruthy();
    expect(isSubsequence('sing', 'sting')).toBeTruthy();
    expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
  });

  it('should return false', () => {
    expect(isSubsequence('abc', 'acb')).toBeFalsy();
  });
});

describe('Check if two strings is subsequence version 2', () => {
  it('should return true', () => {
    expect(isSubsequence2('hello', 'hello world')).toBeTruthy();
    expect(isSubsequence2('sing', 'sting')).toBeTruthy();
    expect(isSubsequence2('abc', 'abracadabra')).toBeTruthy();
  });

  it('should return false', () => {
    expect(isSubsequence2('abc', 'acb')).toBeFalsy();
  });
});
