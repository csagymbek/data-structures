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
    if (!this.root) {
      this.root = new Node(val);
    } else {
      const searchNode = (node) => {
        if (val === node.val) {
          return;
        } else if (val !== node.val) {
          if (val < node.val) {
            if (node.left) {
              return searchNode(node.left);
            } else {
              node.left = new Node(val);
            }
          } else if (val > node.val) {
            if (node.right) {
              return searchNode(node.right);
            } else {
              node.right = new Node(val);
              return;
            }
          }
        }
      };
      searchNode(this.root);
    }
  }
}

const newBST = new BST();
newBST.add(0);
newBST.add(-1);
newBST.add(1);
console.log(newBST);
