function countBits(n) {
    // FIRST SOLUTION
    let bits = [];
    while (n >= 1) {
        bits.unshift(n % 2 == 0 ? "0" : "1");
        n = Math.floor(n / 2);
    }
    return bits.filter(el => el == "1").length;

    // SECOND SOLUTION
    // return n.toString(2).split("").filter(el => el == "1").length;
}

const result = countBits(1234);
console.log(result);