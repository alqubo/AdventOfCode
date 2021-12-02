const input = "yzbqklnj"

// Part One
import Md5 from 'https://cdn.skypack.dev/md5';

const getSaltZeroHashes = (zeros) => {
    let hash = ''
    let salt = 0
    do {
        hash = Md5(input+salt++)
    } while(!hash.startsWith(Array(zeros).fill(0).join('')))

    return salt-1;
}

// Result:
console.log('Part One', getSaltZeroHashes(5))

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// Part Two

// Result:
console.log('Part Two', getSaltZeroHashes(6));
