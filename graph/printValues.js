const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// deapth first iterative print values 
// const depthFirstPrint = (graph, source) => {
//     let output = "";
//     const stack = [source];
//     while (stack.length) {
//         const cur = stack.pop();
//         console.log(cur);
//         output += cur;
//         if (cur in graph) {
//             for (let char of graph[cur]) {
//                 console.log(char);
//                 stack.push(char);
//             }
//         }
//     }
//     return output;
// };
// console.log(depthFirstPrint(graph, "a"));// abdfce

// recursive depth first print values 
const depthFirstPrint = (graph, source) => {
    console.log(source);
    for (let char of graph[source]) {
        depthFirstPrint(graph, char);
    }
};
console.log(depthFirstPrint(graph, "a"));// abdfce

const breadthFirstPrint = (graph, source) => {
    const queue = [source];
    while (queue.length) {
        const cur = queue.shift();
        console.log(cur);
        for (let char of graph[cur]) {
            queue.push(char);
        }
    }
};
console.log(breadthFirstPrint(graph, "a"));// abcdef