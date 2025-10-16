var maxSequence = function (arr) {
    return (arr.length === 0 || arr.every(num => num < 0)) ? 0 : Math.max(...arr.map((num, i) => {
        const tempArr = []
        for (let j = 0; j <= arr.length; j++) {
            const forward = arr.slice(i, j);
            const backward = arr.slice(i, -j);
            const forwardSum = forward.reduce((acc, curr) => acc + curr, 0);
            const backwardSum = backward.reduce((acc, curr) => acc + curr, 0);
            largestSum = forwardSum > backwardSum ? forwardSum : backwardSum;
            if (tempArr.every(num => num < largestSum)) tempArr.push(largestSum);
        }
        return Math.max(...tempArr);
    }));
}

// const result = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
const result = maxSequence([
    7, 4, 11, -11, 39, 36,
    10, -6, 37, -10, -32, 44,
    -26, -34, 43, 43
]);
console.log(result);