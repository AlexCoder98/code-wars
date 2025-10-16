function isANumberPrime(num) {
    if (num <= 1) return false;
    if (num == 2 || num == 3) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        const innerNum = num / i;
        if (Number.isInteger(innerNum)) return false;
    }
    return true;
}

const result = isANumberPrime(41);
console.log(result);