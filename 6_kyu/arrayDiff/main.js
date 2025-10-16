function arrayDiff(a, b) {
    // FIRST SOLUTION
    return a.filter((el) => el !== b.find(bEl => bEl === el));

    // SECOND SOLUTION
    // return a.filter(el => !b.includes(el));
}

// const result = arrayDiff([1, 2, 2, 2, 3], [1, 3]);
const result = arrayDiff([], [1, 3]);
console.log(result);