function highestRank(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1
        }
    }
    return +Object.entries(obj).sort((a, b) => a[1] < b[1] ? 1 : -1)[0][0];
}

const result = highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);
// console.log(result);