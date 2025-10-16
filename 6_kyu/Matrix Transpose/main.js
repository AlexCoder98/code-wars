function transpose(matrix) {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const innerArr = [];
        for (let j = 0; j < matrix.length; j++) {
            innerArr.push(matrix[j][i]);
        }
        result.push(innerArr);
    }
    return result;
}

const result = transpose([[1, 2, 3], [4, 5, 6]]);
// console.log(result);