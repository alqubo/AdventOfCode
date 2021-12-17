//const input = `target area: x=94..151, y=-156..-103`
const input = `target area: x=20..30, y=-10..-5`


// Part One
const getInput = input => {
    const cleanInput = input.replace('target area: ', '')
    const [xArea, yArea] = cleanInput.split(', ')
    const [, xRange] = xArea.split('=')
    const [, yRange] = yArea.split('=')
    const [xMin, xMax] = xRange.split('..').map(Number)
    const [yMin, yMax] = yRange.split('..').map(Number)
    console.log(xMin, xMax)
    
    return { x: { xMin, xMax }, y: { yMin, yMax } }
}

const { x, y } = getInput(input)
console.log(x, y)

// Result
console.log('Part One', result)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

// Result
console.log('Part Two', 0)