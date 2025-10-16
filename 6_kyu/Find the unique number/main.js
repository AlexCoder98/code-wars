function findUniqueNumber(arr) {
    // FIRST SOLUTION
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0];

    // SECOND SOLUTION
    // const sorted = arr.sort();
    // return sorted[0] == sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}

const result = findUniqueNumber([1, 1, 1, 2, 1, 1]);
console.log(result);