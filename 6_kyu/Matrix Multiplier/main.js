function getMatrixProduct(a, b) {
    const transformedB = [], result = [];
    for (let i = 0; i < Math.max(...b.map(el => el.length)); i++) {
        transformedB.push(b.map(el => el[i]));
    }
    if (Math.max(...a.map(el => el.length)) != Math.max(...transformedB.map(el => el.length))) return null;
    for (let i = 0; i < a.length; i++) {
        let count = 0, matrixA = a[i], innerArr = [];
        for (let j = 0; j < transformedB.length; j++) {
            let number = matrixA.map((el, index) => el * transformedB[count][index]).reduce((acc, curr) => acc + curr);
            innerArr.push(number);
            count++;
        }
        result.push(innerArr);
    }
    return result;
};

const result = getMatrixProduct([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
// const result = getMatrixProduct([[0.5, 1], [1.5, 2]], [[0.2, 0.4], [0.6, 0.8]]);
console.log(result);