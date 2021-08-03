const HashTable = require('../hash-table');

let ht;
beforeEach(() => {
  ht = new HashTable();
});

describe('Hash table implementation', () => {
  describe('Check class properties', () => {
    it('should have properties', () => {
      expect(ht).toHaveProperty('keyMap');
      expect(ht).toHaveProperty('set');
      expect(ht).toHaveProperty('get');
      expect(ht).toHaveProperty('keys');
      expect(ht).toHaveProperty('values');
    });
  });

  describe('Set & Get', () => {
    beforeEach(() => {
      expect(ht.set('one', 'Bernd leno')).toBeFalsy();
      expect(ht.set('seven', 'Bukayo saka')).toBeFalsy();
      expect(ht.set('ten', 'Smith rowe')).toBeFalsy();
      expect(ht.set('nine', 'Alex lacazette')).toBeFalsy();
      expect(ht.set('fourteen', 'Piere aubameyang')).toBeFalsy();
    });

    it('should insert key with value', () => {
      expect(ht.set('four', 'Ben white')).toBeFalsy();
    });

    it('should return value based on the key', () => {
      expect(ht.get('ten')).toBe('Smith rowe');
      expect(ht.get('one')).toBe('Bernd leno');
      expect(ht.get('fourteen')).toBe('Piere aubameyang');
    });

    it('should return undefined if key does not exists in the list', () => {
      expect(ht.get('Arron ramsey')).toBeFalsy();
      expect(ht.get('Mesut ozil')).toBeFalsy();
      expect(ht.get('Jack wilshere')).toBeFalsy();
    });
  });

  describe('Keys & Values', () => {
    beforeEach(() => {
      expect(ht.set('one', 'Bernd leno')).toBeFalsy();
      expect(ht.set('seven', 'Bukayo saka')).toBeFalsy();
      expect(ht.set('ten', 'Smith rowe')).toBeFalsy();
      expect(ht.set('nine', 'Alex lacazette')).toBeFalsy();
      expect(ht.set('fourteen', 'Piere aubameyang')).toBeFalsy();
    });

    it('should return keys in the list', () => {
      expect(ht.keys().length).toBe(5);
      expect(ht.keys().includes('one')).toBeTruthy();
      expect(ht.keys().includes('fourteen')).toBeTruthy();
    });

    it('should return values in the list', () => {
      expect(ht.values().length).toBe(5);
      expect(ht.values().includes('Bukayo saka')).toBeTruthy();
      expect(ht.values().includes('Smith rowe')).toBeTruthy();
    });
  });
});
