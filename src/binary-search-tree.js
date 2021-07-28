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
}

module.exports = BinarySearchTree;
