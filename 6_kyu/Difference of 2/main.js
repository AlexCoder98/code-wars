function twosDifference(input) {
    const sorted = input.sort((a, b) => a - b);
    const resArr = [];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j] - sorted[i] === 2) resArr.push([sorted[i], sorted[j]]);
        }
    }
    return resArr;
}

// const result = twosDifference([4, 3, 1, 5, 6]);
// const result = twosDifference([1, 23, 3, 4, 7]);
// const result = twosDifference([4, 1, 2, 3]);
const result = twosDifference([1, 3, 5, 6, 8, 10, 15, 32, 12, 14, 56]);
console.log(result);