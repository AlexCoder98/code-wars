function findEvenIndex(arr) {
    return arr.findIndex((el, index, arr) => {
        const startArr = arr.slice(0, index == 0 ? 0 : index);
        const endArr = arr.slice(index + 1);
        const startSum = startArr.length > 0 ? startArr.reduce((acc, curr) => acc + curr) : 0;
        const endSum = endArr.length > 0 ? endArr.reduce((acc, curr) => acc + curr) : 0;
        return startSum == endSum;
    })
}

const result = findEvenIndex([1, 100, 50, -51, 1, 1]);
// console.log(result);