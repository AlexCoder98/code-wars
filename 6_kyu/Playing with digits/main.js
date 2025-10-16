function digPow(n, p) {
    const k = n.toString().split("").reduce((acc, curr, index) => acc + Math.pow(curr, p + index), 0) / n;
    return Number.isInteger(k) ? k : -1;
}

const result = digPow(46288, 3);
// console.log(result);