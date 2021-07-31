const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const currentValue = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (currentValue <= parentValue) {
        break;
      }

      swap(this.values, parentIndex, index);
      index = parentIndex;
    }
  }

  extractMax() {
    if (!this.values.length) {
      return null;
    }

    swap(this.values, 0, this.values.length - 1);
    const removedValue = this.values.pop();
    this.sinkDown();

    return removedValue;
  }

  sinkDown() {
    let parentIndex = 0;

    while (parentIndex < this.values.length) {
      const leftChildIndex = Math.floor(2 * parentIndex + 1);
      const rightChildIndex = Math.floor(2 * parentIndex + 2);
      const parent = this.values[parentIndex];
      const leftChild = this.values[leftChildIndex];
      const rightChild = this.values[rightChildIndex];
      let maxIndex = null;

      if (parent < leftChild) {
        maxIndex = leftChildIndex;
      }

      if (parent < rightChild && this.values[maxIndex] < rightChild) {
        maxIndex = rightChildIndex;
      }

      if (!maxIndex) {
        break;
      }

      swap(this.values, parentIndex, maxIndex);
      parentIndex = maxIndex;
    }
  }
}

module.exports = MaxBinaryHeap;
