// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
    const visited = new Set();
    let max = 0;
    for (let node in graph) {
        max = Math.max(max, findNodeSize(graph, node, visited));
    }
    return max;
};

const findNodeSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;
    visited.add(node);
    let size = 1;
    for (let val of graph[node]) {
        size += findNodeSize(graph, val, visited);
    }
    return size;
};

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}));// 4

console.log(largestComponent({
    1: ['2'],
    2: ['1', '8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
}));// 6

console.log(largestComponent({
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
}));// 5