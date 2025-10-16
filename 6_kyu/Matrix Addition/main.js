function matrixAddition(a, b) {
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args[0].length; i++) {
        const innerResult = [];
        for (let j = 0; j < args[0][i].length; j++) {
            const sum = args[0][i][j] + args[1][i][j];
            innerResult.push(sum);
        }
        result.push(innerResult);
    }
    return result;
}

const result = matrixAddition([[1, 2, 3], [3, 2, 1], [1, 1, 1]], [[2, 2, 1], [3, 2, 3], [1, 1, 3]]);
// console.log(result);