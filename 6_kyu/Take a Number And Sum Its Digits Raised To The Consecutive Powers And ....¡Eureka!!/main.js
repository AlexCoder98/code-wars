function sumDigPow(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        const numAfterOperation = `${i}`.split('').map((el, index) => Math.pow(+el, index + 1)).reduce((acc, curr) => acc + curr);
        if (numAfterOperation === i) result.push(numAfterOperation);
    }
    return result;
}