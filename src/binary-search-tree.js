const Queue = require('./queue');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) {
          return undefined;
        } else if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }

          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }

          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return undefined;
    }

    return current;
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    const queue = new Queue();
    const visited = [];
    let current = this.root;
    queue.enqueue(current);

    while (queue.length) {
      current = queue.dequeue();
      visited.push(current.value);

      if (current.left) {
        queue.enqueue(current.left);
      }

      if (current.right) {
        queue.enqueue(current.right);
      }
    }

    return visited;
  }

  DFSPreOrder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.value);
    }

    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }
}

module.exports = BinarySearchTree;
