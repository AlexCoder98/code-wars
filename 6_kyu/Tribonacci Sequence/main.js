function tribonacci(signature, n) {
    if (n <= signature.length) return signature.slice(0, n);
    const tribo = signature;
    while (tribo.length < n) {
        tribo.length = tribo.length + 1;
        const num = tribo[tribo.length - 2] + tribo[tribo.length - 3] + tribo[tribo.length - 4];
        tribo[tribo.length - 1] = num;
    }
    return tribo;
}

const result = tribonacci([300, 200, 100], 1);
console.log(result);