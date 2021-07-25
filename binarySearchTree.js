class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    let rootNode = this.root;
    if (rootNode === null) {
      this.root = new Node(data);
      return;
    } else if (data !== rootNode.data) {
      const searchNode = (rootNode) => {
        if (data < rootNode.data) {
          if (rootNode.left === null) {
            rootNode.left = new Node(data);
            return;
          } else if (rootNode.left !== null) {
            return searchNode(rootNode.left);
          }
        } else if (data > rootNode.data) {
          if (rootNode.right === null) {
            rootNode.right = new Node(data);
            return;
          } else if (rootNode.right !== null) {
            return searchNode(rootNode.right);
          }
        } else if (data === rootNode.data) {
          return null;
        }
      };
      return searchNode(rootNode);
    }
  }

  remove(data) {
    const removeNode = (rootNode, data) => {
      if (rootNode === null) {
        return null;
      } else if (rootNode !== null) {
        if (data === rootNode.data) {
          if (rootNode.left === null && rootNode.right === null) return null;
          if (rootNode.left === null) return rootNode.right;
          if (rootNode.right === null) return rootNode.left;
          let rightTempNode = rootNode.right;
          while (rightTempNode.left !== null) {
            rightTempNode = rightTempNode.left;
          }
          rootNode.data = rightTempNode.data;
          rootNode.right = removeNode(rootNode.right, rightTempNode.data);
          return rootNode;
        } else if (data < rootNode.data) {
          rootNode.left = removeNode(rootNode.left, data);
          return rootNode;
        } else if (data > rootNode.data) {
          rootNode.right = removeNode(rootNode.right, data);
          return rootNode;
        }
      }
    };
    this.root = removeNode(this.root, data);
  }

  findMin() {
    let rootNode = this.root;
    while (rootNode !== null && rootNode.left !== null) {
      rootNode = rootNode.left;
    }
    return rootNode.data;
  }

  findMax() {
    let rootNode = this.root;
    while (rootNode !== null && rootNode.right !== null) {
      rootNode = rootNode.right;
    }
    return rootNode.data;
  }

  findData(data) {
    let rootNode = this.root;
    if (data === rootNode.data) {
      return rootNode;
    } else if (data < rootNode.data) {
      while (rootNode.left !== null) {
        rootNode = rootNode.left;
      }
    } else if (data > rootNode.data) {
      while (rootNode.right !== null) {
        rootNode = rootNode.right;
      }
    }
    return rootNode;
  }

  isPresent(data) {
    let rootNode = this.root;
    while (rootNode !== null) {
      if (data === rootNode.data) {
        return true;
      } else if (data < rootNode.data) {
        rootNode = rootNode.left;
      } else if (data > rootNode.data) {
        rootNode = rootNode.right;
      }
    }
    return false;
  }

  isBalanced() {
    return this.minHeight() >= this.maxHeight() - 1;
  }

  minHeight(rootNode = this.root) {
    if (rootNode === null) return -1;
    let leftNode = this.minHeight(rootNode.left);
    let rightNode = this.minHeight(rootNode.right);
    if (leftNode < rightNode) {
      return leftNode + 1;
    } else {
      return rightNode + 1;
    }
  }

  maxHeight(rootNode = this.root) {
    if (rootNode === null) return -1;
    let leftNode = this.maxHeight(rootNode.left);
    let rightNode = this.maxHeight(rootNode.right);
    if (leftNode > rightNode) {
      return leftNode + 1;
    } else {
      return rightNode + 1;
    }
  }

  inOrder() {
    let rootNode = this.root;
    if (rootNode === null) {
      return null;
    } else {
      let result = new Array();
      const traverseInOrder = (rootNode) => {
        if (rootNode.left !== null) {
          traverseInOrder(rootNode.left);
        }
        result.push(rootNode.data);
        if (rootNode.right !== null) {
          traverseInOrder(rootNode.right);
        }
      };
      traverseInOrder(rootNode);
      return result;
    }
  }

  preOrder() {
    let rootNode = this.root;
    if (rootNode === null) {
      return null;
    } else {
      let result = new Array();
      const traversePreOrder = (rootNode) => {
        result.push(rootNode.data);
        if (rootNode.left !== null) {
          traversePreOrder(rootNode.left);
        }
        if (rootNode.right !== null) {
          traversePreOrder(rootNode.right);
        }
      };
      traversePreOrder(rootNode);
      return result;
    }
  }

  postOrder() {
    let rootNode = this.root;
    if (rootNode === null) {
      return null;
    } else {
      let result = new Array();
      const traversePostOrder = (rootNode) => {
        if (rootNode.left !== null) {
          traversePostOrder(rootNode.left);
        }
        if (rootNode.right !== null) {
          traversePostOrder(rootNode.right);
        }
        result.push(rootNode.data);
      };
      traversePostOrder(rootNode);
      return result;
    }
  }

  levelOrder() {}
}

const newBinaryTree = new BinaryTree();

newBinaryTree.add(0);
newBinaryTree.add(-1);
newBinaryTree.add(1);
newBinaryTree.add(2);
newBinaryTree.add(-2);
newBinaryTree.add(3);
newBinaryTree.add(-3);
newBinaryTree.remove(0);

console.log(newBinaryTree);
console.log(newBinaryTree.findMin());
console.log(newBinaryTree.findMax());
console.log(newBinaryTree.findData(-3));
console.log(newBinaryTree.isPresent(-3));
console.log(newBinaryTree.isBalanced());
console.log(newBinaryTree.minHeight());
console.log(newBinaryTree.maxHeight());
console.log(newBinaryTree.inOrder());
console.log(newBinaryTree.preOrder());
console.log(newBinaryTree.postOrder());
console.log(newBinaryTree.levelOrder());
console.log(newBinaryTree);
