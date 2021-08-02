const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const currentValue = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (currentValue.priority >= parentValue.priority) {
        break;
      }

      swap(this.values, parentIndex, index);
      index = parentIndex;
    }
  }

  dequeue() {
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
      let minIndex = null;

      if (leftChild && parent.priority > leftChild.priority) {
        minIndex = leftChildIndex;
      }

      if (
        rightChild &&
        parent.priority > rightChild.priority &&
        this.values[minIndex].priority > rightChild.priority
      ) {
        minIndex = rightChildIndex;
      }

      if (!minIndex) {
        break;
      }

      swap(this.values, parentIndex, minIndex);
      parentIndex = minIndex;
    }
  }
}

module.exports = MaxBinaryHeap;
