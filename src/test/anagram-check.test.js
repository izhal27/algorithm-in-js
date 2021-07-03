const { anagramCheck1, anagramCheck2 } = require('../anagram-check');
let truthyStrings, falsyStrings;

beforeEach(() => {
  truthyStrings = [
    ['', ''],
    ['anagram', 'nagaram'],
    ['qwerty', 'qeywrt'],
    ['texttwisttime', 'timetwisttext'],
    ['risal', 'laris'],
    ['anda', 'nada'],
    ['data', 'adat'],
    ['akta', 'kata'],
  ];

  falsyStrings = [
    ['aaz', 'zza'],
    ['rat', 'car'],
    ['awesome', 'awesom'],
    ['amanaplanacanalpanama', 'acanalmanplanpamana'],
  ];
});

describe('Anagram check verion 1', () => {
  it('should return true', () => {
    truthyStrings.forEach(str => {
      expect(anagramCheck1(str[0], str[1])).toBeTruthy();
    });
  });

  it('should return false', () => {
    falsyStrings.forEach(str => {
      expect(anagramCheck1(str[0], str[1])).toBeFalsy();
    });
  });
});

describe('Anagram check verion 2', () => {
  it('should return true', () => {
    truthyStrings.forEach(str => {
      expect(anagramCheck2(str[0], str[1])).toBeTruthy();
    });
  });

  it('should return false', () => {
    falsyStrings.forEach(str => {
      expect(anagramCheck2(str[0], str[1])).toBeFalsy();
    });
  });
});
