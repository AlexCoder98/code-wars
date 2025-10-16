function nthFibo(n) {
    let fiboSequence = [0, 1];
    while (fiboSequence.length < n) {
        fiboSequence.length = fiboSequence.length + 1;
        const num = (fiboSequence[fiboSequence.length - 2] + fiboSequence[fiboSequence.length - 3]);
        fiboSequence[fiboSequence.length - 1] = num;
    }
    return fiboSequence[n - 1];
}

const result = nthFibo(10);
console.log(result);