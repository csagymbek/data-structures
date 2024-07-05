class Node {
    constructor(val, left = null, right = null) {
        this.val = val === null ? null : val;
        this.left = left === null ? null : left;
        this.right = right === null ? null : right;
    }
}

//       A
//      / \
//     B   C
//    /\    \
//   D E     F

let a = new Node("a");
let b = new Node("b");
let c = new Node("c")
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.right = f;
// console.log(a);

// iterative depth first values 
// const depthFirstValues = (root) => {
//     if (!root) {
//         return [];
//     } else {
//         let vals = [];
//         let stack = [root];
//         while (stack.length) {
//             let cur = stack.pop();
//             vals.push(cur.val);
//             if (cur.right) {
//                 stack.push(cur.right);
//             }
//             if (cur.left) {
//                 stack.push(cur.left);
//             }
//         }
//         return vals;
//     }
// };

// recursive depth first values 
const depthFirstValues = (root) => {
    if (!root) {
        return [];
    }
    return [root.val, ...depthFirstValues(root.left), ...depthFirstValues(root.right)]
}

// console.log(depthFirstValues(a));// ["a", "b", "d", "e", "c", "f"]

// iterative breadth first values 
// const breadthFirstValues = (root) => {
//     if (!root) {
//         return [];
//     }
//     let vals = [];
//     let queue = [root];
//     while (queue.length) {
//         let cur = queue.shift();
//         vals.push(cur.val);
//         // console.log("cur", cur);
//         if (cur.left) {
//             queue.push(cur.left);
//         }
//         if (cur.right) {
//             queue.push(cur.right);
//         }
//     }
//     return vals;
// };

const breadthFirstSearchTarget = (root, target) => {
    if (!root || !target) {
        return false;
    }
    let queue = [root];
    while (queue.length) {
        let cur = queue.shift();
        if (cur.val === target) {
            return true;
        }
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return false;
};

// console.log(breadthFirstSearchTarget(a, "e"));// true
// console.log(breadthFirstSearchTarget(a, "z"));// false
// console.log(breadthFirstSearchTarget(null, "a"));// false

const deapthFirstSearchTarget = (root, target) => {
    if (!root || !target) {
        return false;
    }
    if (root.val === target) {
        return true;
    }
    return deapthFirstSearchTarget(root.right, target) || deapthFirstSearchTarget(root.left, target);
};

// console.log(deapthFirstSearchTarget(a, "e"));// true
// console.log(deapthFirstSearchTarget(a, "z"));// false
// console.log(deapthFirstSearchTarget(a, "d"));// true
// console.log(deapthFirstSearchTarget(null, "e"));// false


// let three = new Node(3);
// let eleven = new Node(11);
// let four = new Node(4);
// let two = new Node(2);
// let secondFour = new Node(4);
// let one = new Node(1);

// three.left = eleven;
// eleven.left = four;
// eleven.right = two;
// three.right = secondFour;
// secondFour.right = one;

// console.log(three);

const breadthFirstSum = (root) => {
    if (!root) {
        return 0;
    }
    let sum = 0;
    let queue = [root];
    while (queue.length) {
        let cur = queue.shift();
        sum += cur.val;
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return sum;
}

// console.log(breadthFirstSum(three));// 25

// recursive deapth first sum of node values 
// const deapthFirstSum = (root) => {
//     if (!root) {
//         return 0;
//     }
//     return root.val + deapthFirstSum(root.left) + deapthFirstSum(root.right);
// };

// iterative deapth first sum of node values
const deapthFirstSum = (root) => {
    if (!root) {
        return 0;
    }
    let stack = [root];
    let sum = 0;
    while (stack.length) {
        cur = stack.pop();
        sum += cur.val;
        if (cur.left) {
            stack.push(cur.left);
        }
        if (cur.right) {
            stack.push(cur.right);
        }
    }
    return sum;
};

// console.log(deapthFirstSum(three));// 25

// let five = new Node(5);
// let eleven = new Node(11);
// let four = new Node(4);
// let fifteen = new Node(15);
// let three = new Node(3);
// let twelve = new Node(12);
// five.left = eleven;
// eleven.left = four;
// eleven.right = fifteen;
// five.right = three;
// three.right = twelve;

// iterative deapth first find minimum value
// const deapthFirstFindMinValue = (root) => {
//     if (!root) {
//         return false;
//     }
//     let stack = [root];
//     let min = Infinity;
//     while (stack.length) {
//         let cur = stack.pop();
//         if (cur.val < min) {
//             min = cur.val;
//         }
//         if (cur.left) {
//             stack.push(cur.left);
//         }
//         if (cur.right) {
//             stack.push(cur.right);
//         }
//     }
//     return min;
// };

// recursive deapth first search min value 
const deapthFirstFindMinValue = (root) => {
    if (!root) {
        return Infinity;
    }
    return Math.min(root.val, deapthFirstFindMinValue(root.left), deapthFirstFindMinValue(root.right));
};

// console.log(deapthFirstFindMinValue(five));// 3


// iterative breadth firt find minimum value 
const breadthFirstFindMinValue = (root) => {
    if (!root) {
        return root;
    }
    let min = Infinity;
    let queue = [root];
    while (queue.length) {
        let cur = queue.shift();
        if (cur.val < min) {
            min = cur.val;
        }
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return min;
};

// console.log(breadthFirstFindMinValue(five));// 3

let five = new Node(5);
let eleven = new Node(11);
let four = new Node(4);
let two = new Node(2);
let three = new Node(3);
let one = new Node(1);
five.left = eleven;
eleven.left = four;
eleven.right = two;
five.right = three;
three.right = one;

// recursive deapth first max path sum 
const maxPathSum = (root) => {
    if (!root) {
        return 0;
    }
    return Math.max(root.val + maxPathSum(root.left), root.val + maxPathSum(root.right));
};

console.log(maxPathSum(five));