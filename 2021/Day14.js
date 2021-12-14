const input = `HBCHSNFFVOBNOFHFOBNO

HF -> O
KF -> F
NK -> F
BN -> O
OH -> H
VC -> F
PK -> B
SO -> B
PP -> H
KO -> F
VN -> S
OS -> B
NP -> C
OV -> C
CS -> P
BH -> P
SS -> P
BB -> H
PH -> V
HN -> F
KV -> H
HC -> B
BC -> P
CK -> P
PS -> O
SH -> N
FH -> N
NN -> P
HS -> O
CB -> F
HH -> F
SB -> P
NB -> F
BO -> V
PN -> H
VP -> B
SC -> C
HB -> H
FP -> O
FC -> H
KP -> B
FB -> B
VK -> F
CV -> P
VF -> V
SP -> K
CC -> K
HV -> P
NC -> N
VH -> K
PF -> P
PB -> S
BF -> K
FF -> C
FV -> V
KS -> H
VB -> F
SV -> F
HO -> B
FN -> C
SN -> F
OB -> N
KN -> P
BV -> H
ON -> N
NF -> S
OF -> P
NV -> S
VS -> C
OO -> C
BP -> H
BK -> N
CP -> N
PC -> K
CN -> H
KB -> B
BS -> P
KK -> P
SF -> V
CO -> V
CH -> P
FO -> B
FS -> F
VO -> H
NS -> F
KC -> H
VV -> K
NO -> P
OK -> F
PO -> V
FK -> H
OP -> H
PV -> N
CF -> P
NH -> K
SK -> O
KH -> P
HP -> V
OC -> V
HK -> F`
/*const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`*/


// Part One
const parseInput = () => {
    const [str, rulesOut] = input.split('\n\n')

    const rules = rulesOut.split('\n').map(line => {
        const [rule, value] = line.split(' -> ')
        return {
            rule,
            value
        }
    })
    return { str, rules }
}

const steps = (str, rules, n = 10) => {
    for(let step = 0; step < n; step++) {
        let newStr_ = ''

        for(let i = 0; i < str.length; i++) {
            const pair = str.slice(i, i+2)
            newStr_ += str[i]

            const rule = rules.find(r => r.rule === pair)
            if(rule) newStr_ += rule.value
        }
        
        str = newStr_
    }

    return str
}

const countChars = (str) => {
    const chars = new Set(str.split(''))

    let least = Infinity
    let most = 0

    chars.forEach(c => {
        const count = str.split('').filter(strC => strC === c).length
        if(count < least) least = count
        if(count > most) most = count
    })
    
    return { least, most }
}

const { rules, str } = parseInput()

let polymer = steps(str, rules)
let { least, most } = countChars(polymer)

// Result
console.log('Part One', most - least)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

polymer = steps(str, rules, 40) // Having time... why optimize? \o/  +10 min lel 
least = countChars(polymer).least 
most = countChars(polymer).most

// Result
console.log('Part Two', most - least)