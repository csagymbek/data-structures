const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) {
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log(graph);
    return graph;
};

const hasPath = (graph, src, dst, newSet) => {
    if (newSet.has(src)) {
        return false;
    }
    newSet.add(src);
    if (src === dst) {
        return true;
    }
    if (graph[src]) {
        for (let char of graph[src]) {
            if (hasPath(graph, char, dst, newSet)) {
                return true;
            }
        }
    }
    return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
};

console.log(undirectedPath(edges, 'j', 'm')); // -> true
console.log(undirectedPath(edges, 'm', 'j')); // -> true
console.log(undirectedPath(edges, 'l', 'j')); // -> true