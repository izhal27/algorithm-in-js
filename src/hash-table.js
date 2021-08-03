class HashTable {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (let item of this.keyMap[index]) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keys = [];

    this.keyMap.forEach((item) => {
      keys = [...keys, ...item.map((i) => i[0])];
    });

    return keys;
  }

  values() {
    let values = [];

    this.keyMap.forEach((item) => {
      values = [...values, ...item.map((i) => i[1])];
    });

    return values;
  }
}

module.exports = HashTable;
