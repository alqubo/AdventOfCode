const input = "00100 11110 10110 10111 10101 01111 00111 11100 10000 11001 00010 01010"

// Part One
const addBinary = (a, b) => {
    let result = ''
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1
    while (i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) sum += a[i--] - '0'
        if (j >= 0) sum += b[j--] - '0'
        result = (sum % 2) + result
        carry = Math.floor(sum / 2)
    }
    if (carry > 0) result = carry + result
    return result
}

console.log(addBinary("00100", "11110"))

let gammaRate = '';
let epsilonRate = '';

const getRate = (input) => {
    let rate = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '0') {
            rate += '1'
        } else {
            rate += '0'
        }
    }
    return rate;
}

console.log(getRate("00100"))

input.split(' ').forEach(report => {
    
    console.log(report)


})

// Result:
console.log('Part One', position[0] * position[1])

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

// Result:
console.log('Part Two', position[0] * position[1])