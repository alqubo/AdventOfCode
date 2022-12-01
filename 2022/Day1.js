const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

const inputArr = input.split('\n\n')

const elfs = []
inputArr.forEach((elf, index) => {
  const count = elf.split('\n').reduce((acc, n) => Number(n) + acc, 0)
  elfs.push({index, count})
})

const elf = elfs.sort((a, b) => b.count - a.count)
console.log(elf)
