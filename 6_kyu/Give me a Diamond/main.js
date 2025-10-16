function diamond(n) {
    if (n % 2 == 0 || n < 0) return null;
    let diamond = "";
    let mid = Math.round(n / 2);
    for (let i = 0; i < n; i++) {
        let spaces = i < mid ? " ".repeat(mid - i - 1) : " ".repeat(i - mid + 1);
        let stars = i < mid ? "*".repeat(i + 1 + i) : "*".repeat(n - spaces.length * 2);
        let partOfADiamond = `${spaces}${stars}\n`;
        diamond += partOfADiamond;
    }
    return diamond;
}

const result = diamond(5);
// console.log(result);