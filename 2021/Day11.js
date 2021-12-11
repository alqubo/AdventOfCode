const input = `4112256372
3143253712
4516848631
3783477137
3746723582
5861358884
4843351774
2316447621
6643817745
6366815868`
/*const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`*/

const nearPoints = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
];

// Part One
const parseInput = input => input.split('\n').map(r => r.split('').map(Number))
  
const step = (grid, flashed) =>
    grid
        .map(row => row.map(c => c + 1)) // Add 1
        .map((row, y, grid) => {  // Check neighbors
            const queue = []
            row.forEach((_, x) => {
                if (grid[y][x] > 9) {
                    queue.push([x, y])
                    while (queue.length) {
                        const [qx, qy] = queue.shift()
                        if (!flashed.has(`${qx},${qy}`) && ++grid[qy][qx] > 9) {
                            flashed.add(`${qx},${qy}`)
                            queue.push(...nearPoints.map(([dx, dy]) => [dx + qx, dy + qy]).filter(([nx, ny]) => grid[ny]?.[nx]))
                        }
                    }
                }
            })
            return row
        })
        .map(row => row.map(c => (c > 9 ? 0 : c)))
  
const steps = (grid, numSteps = 100) => {
    const set = new Set()
    return Array(numSteps).fill(0).map(_ => {
        set.clear()
        grid = step(grid, set)
        return set.size
    });
}

const matrix = parseInput(input)

// Result
console.log('Part One', steps(matrix).reduce((sum, v) => sum + v))

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

// Result
console.log('Part Two', steps(matrix, 250).findIndex(v => v === matrix.length * matrix[0].length) + 1)