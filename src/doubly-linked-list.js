class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.previous;
      this.tail.next = null;
      removedNode.previous = null;
    }

    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.previous = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = null;

    if (index < this.length / 2) {
      current = this.head;
      let counter = 0;

      while (index !== counter) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      let counter = this.length - 1;

      while (index !== counter) {
        current = current.previous;
        counter--;
      }
    }

    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
    }

    return !!foundNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.previous = beforeNode;
      newNode.next = afterNode;
      afterNode.previous = newNode;
      this.length++;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let removedNode = null;

    if (index === 0) {
      removedNode = this.shift();
    } else if (index === this.length - 1) {
      removedNode = this.pop();
    } else {
      removedNode = this.get(index);
      let beforeNode = removedNode.previous;
      let afterNode = beforeNode.next;

      beforeNode.next = afterNode;
      afterNode.previous = beforeNode;
      removedNode.next = null;
      removedNode.previous = null;
      this.length--;
    }

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      node.previous = next;
      previous = node;
      node = next;
    }
  }
}

module.exports = DoublyLinkedList;
