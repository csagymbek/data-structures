const minimumIsland = (grid) => {
    let min = Infinity;
    const visited = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const size = exploreSize(grid, r, c, visited);
            if (size > 0 && size < min) {
                min = size;
            }
        }
    }
    return min;
};

const exploreSize = (grid, r, c, visited) => {
    if (!(r >= 0 && r < grid.length) || !(c >= 0 && c < grid[0].length)) {
        return 0;
    }
    if (grid[r][c] === "W") {
        return 0;
    }
    if (visited.has(`${r},${c}`)) {
        return 0;
    }
    visited.add(`${r},${c}`);
    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);
    return size;
};

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2
