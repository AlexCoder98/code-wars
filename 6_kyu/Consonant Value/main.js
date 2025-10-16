function solve(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return Math.max(...str.split(/[aioue]+/g).map(el => Array.from(el)).filter(el => el.length > 0).map(el => el.map(el => alphabet.indexOf(el) + 1).reduce((acc, curr) => acc + curr)));
}

const result = solve("zodiac");
// console.log(result);