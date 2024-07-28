// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const queue = [[nodeA, 0]];
    let visited = new Set(nodeA);
    while (queue.length) {
        const [current, distance] = queue.shift();
        if (current === nodeB) return distance;
        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
};

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

console.log(shortestPath(edges, "w", "z"));// 2
console.log(shortestPath(edges, "y", "x"));// 1