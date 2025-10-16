function highAndLow(string) {
    const arrWithNumbers = string.split(" ").map(int => +int);
    return [Math.max(...arrWithNumbers), Math.min(...arrWithNumbers)].join(" ");
}

const result = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
console.log(result);