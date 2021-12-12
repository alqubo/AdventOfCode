const input = `xq-XZ
zo-yr
CT-zo
yr-xq
yr-LD
xq-ra
np-zo
end-LD
np-LD
xq-kq
start-ra
np-kq
LO-end
start-xq
zo-ra
LO-np
XZ-start
zo-kq
LO-yr
kq-XZ
zo-LD
kq-ra
XZ-yr
LD-ws
np-end
kq-yr`
/*const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`*/
/*const input = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`*/
/*const input = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`*/

// Part One
const paths = {}
const startEndLabels = ['start', 'end']

const mapPath = (from, to) => {
    const mayusRegex = /[A-Z]/
    const path_ = from in paths ? paths[from] : {
        id: from,
        links: new Set(),
        isBig: mayusRegex.test(from),
        onlyOnce: startEndLabels.includes(from)
    }
    path_.links.add(to)
    paths[from] = path_
}

const parseInput = input => {
    input.split('\n').forEach(line => {
        const [from, to] = line.split('-')
        mapPath(from, to)
        mapPath(to, from)
    })
}

parseInput(input)

const visit = (part2, node, path = [], visited = new Set(), flag = false) => {
    const newPath = [...path]
    let steps = 0

    if(part2) {
        if(visited.has(node.id)) {
            if(flag || node.onlyOnce) return steps
            flag = true
        } else if(!node.isBig) visited.add(node.id)
    } else {
        if(visited.has(node.id)) return steps
        else if(!node.isBig) visited.add(node.id)
    }

    newPath.push(node.id)
    
    node.links.forEach(link => {
        if(link === 'end') steps++
        else steps += visit(part2, paths[link], newPath, new Set(Array.from(visited)), flag)
    })

    return steps
}

// Result
console.log('Part One', visit(false, paths['start']))

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

// Result
console.log('Part Two', visit(true, paths['start']))