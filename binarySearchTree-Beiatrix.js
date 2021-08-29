class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root = null, count = 0) {
    this.root = root;
    this.count = count;
  }

  size() {
    return this.count;
  }

  insert(val) {
    this.count++;
    if (this.root) {
      const searchTree = (node) => {
        if (val < node.val) {
          if (node.left) {
            return searchTree(node.left);
          } else {
            node.left = new Node(val);
            return;
          }
        }
        if (val > node.val) {
          if (node.right) {
            return searchTree(node.right);
          } else {
            node.right = new Node(val);
            return;
          }
        }
        if (val === node.val) {
          return null;
        }
      };
      return searchTree(this.root);
    } else {
      this.root = new Node(val);
      return;
    }
  }

  min() {
    let rootNode = this.root;
    while (rootNode.left) {
      rootNode = rootNode.left;
    }
    return rootNode.val;
  }

  max() {
    let rootNode = this.root;
    while (rootNode.right) {
      rootNode = rootNode.right;
    }
    return rootNode.val;
  }

  contains(val) {
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

  inorderDFS() {
    const res = new Array();
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      res.push(node.val);
      if (node.right) traverse(node.right);
    };
    return traverse(this.root);
    return res;
  }

  preorderDFS() {
    const res = new Array();
    const traverse = (node) => {
      res.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    return traverse(this.root);
    return res;
  }

  postorderDFS() {
    const res = new Array();
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(node.val);
    };
    return traverse(this.root);
    return res;
  }

  bfs() {
    const res = new Array();
    const queue = new Array();
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      res.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return res;
  }
}

const newBST = new BST();
newBST.insert(15);
newBST.insert(3);
newBST.insert(36);
newBST.insert(2);
newBST.insert(12);
newBST.insert(28);
newBST.insert(39);
console.log(newBST.size());
console.log(newBST.min());
console.log(newBST.max());
console.log(newBST);
