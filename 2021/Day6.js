//const input = `1,1,1,1,1,5,1,1,1,5,1,1,3,1,5,1,4,1,5,1,2,5,1,1,1,1,3,1,4,5,1,1,2,1,1,1,2,4,3,2,1,1,2,1,5,4,4,1,4,1,1,1,4,1,3,1,1,1,2,1,1,1,1,1,1,1,5,4,4,2,4,5,2,1,5,3,1,3,3,1,1,5,4,1,1,3,5,1,1,1,4,4,2,4,1,1,4,1,1,2,1,1,1,2,1,5,2,5,1,1,1,4,1,2,1,1,1,2,2,1,3,1,4,4,1,1,3,1,4,1,1,1,2,5,5,1,4,1,4,4,1,4,1,2,4,1,1,4,1,3,4,4,1,1,5,3,1,1,5,1,3,4,2,1,3,1,3,1,1,1,1,1,1,1,1,1,4,5,1,1,1,1,3,1,1,5,1,1,4,1,1,3,1,1,5,2,1,4,4,1,4,1,2,1,1,1,1,2,1,4,1,1,2,5,1,4,4,1,1,1,4,1,1,1,5,3,1,4,1,4,1,1,3,5,3,5,5,5,1,5,1,1,1,1,1,1,1,1,2,3,3,3,3,4,2,1,1,4,5,3,1,1,5,5,1,1,2,1,4,1,3,5,1,1,1,5,2,2,1,4,2,1,1,4,1,3,1,1,1,3,1,5,1,5,1,1,4,1,2,1`
const input = `3,4,3,1,2`
let days = 80

// Part One
let lanternfish = input.split(',').map(Number)
let calendar = []
calendar.push(lanternfish)

const calculateDay = (yesterday) => {
    let today = [...yesterday]
    today.forEach((value, index) => {
        if(value === 0) {
            today[index] = 6
            today.push(8)
        } else {
            today[index] = value - 1
        }
    })
    return today
}

for(let i = 0; i < days; i++) {
    const yesterday = calendar[calendar.length - 1]
    const today = calculateDay(yesterday)
    calendar.push(today)
}

let lastDay = calendar[calendar.length - 1]
// console.log(calendar)


// Result
console.log(`Part One - lanternfish after ${days} days`, lastDay.length)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two
days = 80

let today = lanternfish.reduce((acc, value) => {
    acc.push({v: value, n: 0})
    return acc
}, [])

calendar = []
calendar.push(today)

const calculateDay2 = (yesterday) => {
    let today = [...yesterday]
    today.forEach((value, index) => {
        if(value.v === 0) {
            today[index].n++
            today[index].v = 6
        } else {
            today[index].v = today[index].v - 1
        }
    })
    
    return today
}

for(let i = 0; i < days; i++) {
    const yesterday = calendar.shift()
    const today = calculateDay2(yesterday)
    calendar.push(today)
}

lastDay = calendar[calendar.length - 1]
console.log(calendar)

let lanternfishTotal = lastDay.reduce((acc, value) => {
    return acc + value.n
}, 0)
// Result
console.log(`Part Two - lanternfish after ${days} days`, lanternfishTotal)