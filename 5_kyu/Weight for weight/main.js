function orderWeight(str) {
    const strWithNumbers = str.split(" ").map(el => el.split("").map(el => +el));
    return strWithNumbers.sort((a, b) => {
        const sumA = a.reduce((acc, curr) => acc + curr);
        const sumB = b.reduce((acc, curr) => acc + curr);
        if (sumA == sumB) {
            return a.join("").localeCompare(b.join(""));
        } else {
            return sumA - sumB;
        }
    }).map(el => el.join("")).join(" ")
}

// const result = orderWeight("103 123 4444 99 2000 2000 10003 1234000 44444444 9999 11 11 22 123");
const result = orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81");
// const result = orderWeight("490612 144 398024 147 449618 26 368040 99 276261 140 318281 182 210014 168 195060 75 169340 124 171718 1 28");
// const result = orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
// console.log(result === "11 11 2000 10003 22 123 1234000 44444444 9999");
// console.log(result === "2000 103 123 4444 99");
// console.log(result);
