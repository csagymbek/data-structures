const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

// depth first search recursive solution 
// const hasPath = (graph, src, dst) => {
//     if (src === dst) {
//         return true;
//     }
//     if (graph[src]) {
//         for (let char of graph[src]) {
//             if (hasPath(graph, char, dst)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// depth first search iterative solution
const hasPath = (graph, src, dst) => {
    const stack = [src];
    while (stack.length) {
        const cur = stack.pop();
        if (cur === dst) {
            return true;
        }
        for (let char of graph[cur]) {
            stack.push(char);
        }
    }
    return false;
};

// breadth first search solution 
// const hasPath = (graph, src, dst) => {
//     const queue = [src];
//     while (queue.length) {
//         const cur = queue.shift();
//         if (graph[cur]) {
//             for (let char of graph[cur]) {
//                 if (char === dst) {
//                     return true;
//                 }
//                 queue.push(char);
//             }
//         }
//     }
//     return false;
// };

console.log(hasPath(graph, 'f', 'k')); // true
console.log(hasPath(graph, 'f', 'j')); // false
console.log(hasPath(graph, 'i', 'h')); // true