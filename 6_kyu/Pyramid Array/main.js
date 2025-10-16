function pyramid(n) {
    // FIRST SOLUTION
    const arr = [];
    for (let i = 1; i <= n; i++) {
        const innerArr = [];
        for (let j = 1; j <= i; j++) {
            innerArr.push(1);
        }
        arr.push(innerArr);
    }
    // return arr;

    // SECOND SOLUTION
    // return Array(3).fill(1).map((el, index) => Array(index + 1).fill(1));
}

const result = pyramid(10);
console.log(result);