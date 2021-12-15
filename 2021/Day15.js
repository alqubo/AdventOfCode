const input = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`

// Part One
const parseInput = input => input.split('\n').map(r => r.split('').map(Number))

const matrix = parseInput(input)
console.log(matrix)

const getLowestRiskPath = (matrix, path = [], x = 0, y = 0) => {

    const down = matrix[y + 1][x]
    const right = matrix[y][x + 1]

    if(!down && !right) { 
        return path
    }

    let move = down <= right
        ? { x, y: y + 1, value: down }
        : { x: x + 1, y, value: right }
    
    if(down && right) {
        console.log({down, right, move})
        path.push(move)
    }

    return getLowestRiskPath(matrix, path, move.x, move.y)
}

const getPathRisk = path => path.reduce((acc, path) => acc + path.value, 0)

const path = getLowestRiskPath(matrix)
console.log(path)
console.log(getPathRisk(path))

// Result
console.log('Part One', 0)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

// Result
console.log('Part Two', 0)