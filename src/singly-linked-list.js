class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let removedNode = null;

    if (this.length > 2) {
      let previous = this.head;
      let current = this.head.next;

      while (current.next) {
        previous = current;
        current = current.next;
      }

      this.tail = previous;
      this.tail.next = null;
      removedNode = current;
    } else if (this.length === 2) {
      removedNode = this.tail;
      this.tail = this.head;
      this.head.next = null;
    } else {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    }

    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removedNode = null;

    if (this.length > 1) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    }

    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
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

    let foundNode = null;

    if (index === 0) {
      foundNode = this.head;
    } else if (index === this.length) {
      foundNode = this.tail;
    } else {
      let counter = 1;
      let current = this.head.next;

      while (counter !== index) {
        current = current.next;
        counter++;
      }

      foundNode = current;
    }

    return foundNode;
  }

  set(index, newValue) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = newValue;
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
      let previous = this.get(index - 1);

      newNode.next = previous.next;
      previous.next = newNode;
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
      let previous = this.get(index - 1);

      removedNode = previous.next;
      previous.next = removedNode.next;
      removedNode.next = null;
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
      previous = node;
      node = next;
    }
  }
}

module.exports = SinglyLinkedList;
