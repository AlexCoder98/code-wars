function maxAndMin(arr1, arr2) {
    const maxDiffArr = [];
    const minDiffArr = [];
    for (const el of arr1) {
        for (const el2 of arr2) {
            const maxDiff = Math.abs(el - el2);
            const minDiff = el2 < el ? Math.abs(el - el2) : (el2 - el);
            maxDiffArr.push(!maxDiffArr.includes(maxDiff) ? maxDiff : null);
            minDiffArr.push(minDiff);
        }
    }
    return [Math.max(...maxDiffArr), Math.min(...minDiffArr)];
}

const result = maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
// console.log(result);