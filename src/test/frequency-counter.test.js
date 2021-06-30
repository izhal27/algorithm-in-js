const frequencyCounter = require('../frequency-counter');
let truthyArrays, falsyArrays;

beforeEach(() => {
  truthyArrays = [
    [
      [1, 2, 3, 4],
      [1, 4, 9, 16],
    ],
    [
      [1, 4, 1, 4],
      [1, 16, 1, 16],
    ],
    [
      [1, 2, 3, 2],
      [1, 4, 9, 4],
    ],
    [
      [3, 2, 3, 2],
      [9, 4, 9, 4],
    ],
    [
      [5, 1, 7, 4],
      [49, 16, 25, 1],
    ],
  ];

  falsyArrays = [
    [
      [1, 2, 3, 4],
      [1, 4, 9],
    ],
    [
      [1, 2, 3, 4],
      [1, 4, 9, 25],
    ],
    [
      [1, 2, 1, 4],
      [1, 4, 1, 25],
    ],
  ];
});

describe('Frequency counter version 1', () => {
  it('should return true', () => {
    truthyArrays.forEach(array => {
      expect(frequencyCounter.same1(array[0], array[1])).toBeTruthy();
    });
  });

  it('should return false', () => {
    falsyArrays.forEach(array => {
      expect(frequencyCounter.same1(array[0], array[1])).toBeFalsy();
    });
  });
});

describe('Frequency counter version 2', () => {
  it('should return true', () => {
    truthyArrays.forEach(array => {
      expect(frequencyCounter.same2(array[0], array[1])).toBeTruthy();
    });
  });

  it('should return false', () => {
    falsyArrays.forEach(array => {
      expect(frequencyCounter.same2(array[0], array[1])).toBeFalsy();
    });
  });
});
