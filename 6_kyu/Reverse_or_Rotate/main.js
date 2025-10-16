function revrot(str, sz) {
    if (sz === 0) return '';
    const strArr = str.split(''), arr = [];
    while (strArr.length > 0) {
        const substring = strArr.splice(0, sz);
        arr.push(substring);
    }
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        const chunk = arr[i];
        if (arr[i].length >= sz) {
            let part = '';
            const sum = chunk.reduce((acc, curr) => acc + +curr, 0);
            if (Number.isInteger(sum / 2)) {
                part = chunk.reverse().join('');
            } else {
                part = `${chunk.slice(1).join('')}${chunk.shift()}`;
            }
            res += part;
        }
    }
    return res;
}

// const result = revrot('563000655734469485', 4);
// const result = revrot('733049910872815764', 5);
// const result = revrot('8414095993009067389186966222944461529212886885578562112186890', 7);
const result = revrot('56300065573446948588855', 3);
console.log(result);
console.log(result === '365000556437694854888');