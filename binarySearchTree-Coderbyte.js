class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
//       a
//      / \
//     b   c
//    / \   \
//   d   e   f
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
const bfs = (root) => {
  const queue = new Array(root);
  const res = new Array();
  while (queue.length) {
    const cur = queue.shift();
    console.log(cur.val);
    res.push(cur.val);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return res;
};
// console.log(bfs(a)); //[a, b, c, d, e, f]

// Write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments. The function should return a boolean indicating whether or not tree contains the target value
// const bfsTarget = (root, target) => {
//   const queue = new Array(root);
//   while (queue.length) {
//     const cur = queue.shift();
//     console.log(cur.val);
//     if (target === cur.val) return true;
//     if (cur.left) queue.push(cur.left);
//     if (cur.right) queue.push(cur.right);
//   }
//   return false;
// };
const bfsTarget = (root, target) => {
  const queue = new Array(root);
  const res = new Array();
  while (queue.length) {
    const cur = queue.shift();
    console.log(cur.val);
    res.push(cur.val);

    if (target === cur.val) return true;
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  console.log(res);
  return res.indexOf(target) !== -1;
};
// console.log(bfsTarget(a, "e")); //true
// console.log(bfsTarget(a, "z")); //false

// Write a function, sumTree(root), that takes in the root of a binary tree as an argument. The funciton should return total sum of all values. You can assume that the tree only contains number values.
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);
//       3
//     /  \
//    2    7
//   / \    \
// -2  4    5
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const sumTree = (root) => {
  const queue = new Array(root);
  let sum = 0;
  while (queue.length) {
    const cur = queue.shift();
    sum += cur.val;
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
  return sum;
};
console.log(sumTree(a));
