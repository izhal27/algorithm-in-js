const {
  findLongestSubstring,
  findLongestSubstring2,
} = require('../find-longest-substring');

describe('Find the length of the longest substring with all distinct characters', () => {
  it('should return a number', () => {
    expect(findLongestSubstring('rithmschool')).toEqual(7);
    expect(findLongestSubstring('thisisawesome')).toEqual(6);
    expect(findLongestSubstring('thecatinthehat')).toEqual(7);
    expect(findLongestSubstring('bbbbbb')).toEqual(1);
    expect(findLongestSubstring('longestsubstring')).toEqual(8);
    expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
  });

  it('should return 0', () => {
    expect(findLongestSubstring('')).toEqual(0);
  });
});

describe('Find the length of the longest substring with all distinct characters version 2', () => {
  it('should return a number', () => {
    expect(findLongestSubstring2('rithmschool')).toEqual(7);
    expect(findLongestSubstring2('thisisawesome')).toEqual(6);
    expect(findLongestSubstring2('thecatinthehat')).toEqual(7);
    expect(findLongestSubstring2('bbbbbb')).toEqual(1);
    expect(findLongestSubstring2('longestsubstring')).toEqual(8);
    expect(findLongestSubstring2('thisishowwedoit')).toEqual(6);
  });

  it('should return 0', () => {
    expect(findLongestSubstring2('')).toEqual(0);
  });
});
