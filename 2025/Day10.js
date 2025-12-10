const demo = `
[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}
`

const inputString = `
`

const parseLine = (line) => {
    const diagram = line.match(/\[([.#]+)\]/)[1]
    const buttons = [...line.matchAll(/\((.*?)\)/g)].map(m => m[1].split(',').map(Number))

    return {
        target: [...diagram].map(c => c === '#' ? 1 : 0),
        buttons: buttons
    }
}

const input = demo
    .split('\n')
    .filter(line => line.length > 0)
    .map(parseLine)

// Part One
const partOne = () => {
    input.reduce((acc, curr) => {
        const {target, buttons} = curr
        console.log({target, buttons})
        return acc
    }, 0)

    return 0
}

// Result
console.time("Part One");
console.log('Part One', partOne())
console.timeEnd("Part One");

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two
const partTwo = () => {
    return 0
}

// Result
console.time("Part Two");
console.log('Part Two', partTwo())
console.timeEnd("Part Two");
