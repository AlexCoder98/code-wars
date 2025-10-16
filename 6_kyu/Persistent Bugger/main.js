function persistence(num) {
    let count = 0;
    while (num > 9) {
        num = num.toString().split("").map(el => +el).reduce((acc, curr) => acc * curr);
        count++;
    }
    return count;
}

const result = persistence(4);
console.log(result);