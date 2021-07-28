class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const removedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = removedNode.next;
    this.length--;

    return removedNode.value;
  }
}

module.exports = Queue;
