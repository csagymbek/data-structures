class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(val) {
    if (this.root) {
      const searchNode = (node) => {
        if (val === node.val) {
          return;
        }
        if (val < node.val) {
          if (node.left) {
            return searchNode(node.left);
          } else {
            node.left = new Node(val);
            return;
          }
        }
        if (val > node.val) {
          if (node.right) {
            return searchNode(node.right);
          } else {
            node.right = new Node(val);
            return;
          }
        }
      };
      return searchNode(this.root);
    } else {
      this.root = new Node(val);
      return;
    }
  }

  findMin() {
    let rootNode = this.root;
    while (rootNode.left) {
      rootNode = rootNode.left;
    }
    return rootNode.val;
  }

  findMax() {
    let rootNode = this.root;
    while (rootNode.right) {
      rootNode = rootNode.right;
    }
    return rootNode.val;
  }

  findNode(val) {
    let rootNode = this.root;
    while (rootNode.val !== val) {
      if (val < rootNode.val) {
        rootNode = rootNode.left;
      }
      if (val > rootNode.val) {
        rootNode = rootNode.right;
      }
      if (!rootNode) {
        return null;
      }
    }
    return rootNode;
  }

  isPresent(val) {
    let rootNode = this.root;
    while (rootNode) {
      if (val === rootNode.val) {
        return true;
      }
      if (val < rootNode.val) {
        rootNode = rootNode.left;
      }
      if (val > rootNode.val) {
        rootNode = rootNode.right;
      }
    }
    return false;
  }

  remove(val) {
    const removeNode = (node, val) => {
      if (!node) return null;
      if (val === node.val) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        let rightNode = node.right;
        while (rightNode.left) {
          rightNode = rightNode.left;
        }
        node.val = rightNode.val;
        node.right = removeNode(node.right, rightNode.val);
        return node;
      }
      if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      }
      if (val > node.val) {
        node.right = remvoeNode(node.right, val);
        return node;
      }
    };
    return removeNode(this.root, val);
  }

  findMinHeight(node = this.root) {
    if (!node) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (!node) return -1;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  inOrder() {
    if (!this.root) {
      return [];
    } else {
      const newAr = [];
      const traverseInOrder = (node) => {
        node.left && traverseInOrder(node.left);
        newAr.push(node.val);
        node.right && traverseInOrder(node.right);
      };
      traverseInOrder(this.root);
      return newAr;
    }
  }

  preOrder() {
    if (!this.root) {
      return [];
    } else {
      const res = new Array();
      const traversePreOrder = (node) => {
        res.push(node.val);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return res;
    }
  }

  postOrder() {
    if (!this.root) {
      return [];
    } else {
      const res = new Array();
      const traversePostOrder = (node) => {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        res.push(node.val);
      };
      traversePostOrder(this.root);
      return res;
    }
  }

  levelOrder() {
    const res = [];
    const queue = [];
    if (this.root) {
      queue.push(this.root);
      while (queue.length) {
        const queueNode = queue.shift();
        res.push(queueNode.val);
        if (queueNode.left) {
          queue.push(queueNode.left);
        }
        if (queueNode.right) [queue.push(queueNode.right)];
      }
      return res;
    } else {
      return null;
    }
  }
}

const newBST = new BST();
newBST.add(9);
newBST.add(4);
newBST.add(17);
newBST.add(3);
newBST.add(6);
newBST.add(22);
newBST.add(5);
newBST.add(7);
newBST.add(20);
newBST.add(10);
// console.log(newBST.findMin());
// console.log(newBST.findMax());
// console.log(newBST.findNode(4));
// console.log(newBST.isPresent(3));
// console.log(newBST.remove(1));
// console.log(newBST.remove(3));
// console.log(newBST.remove(2));
console.log(newBST.findMinHeight());
console.log(newBST.findMaxHeight());
console.log(newBST.isBalanced());
console.log(newBST.isPresent(22));
console.log(newBST.isPresent(21));
console.log(newBST.inOrder());
console.log(newBST.preOrder());
console.log(newBST.postOrder());
console.log(newBST.levelOrder());
console.log(newBST);
