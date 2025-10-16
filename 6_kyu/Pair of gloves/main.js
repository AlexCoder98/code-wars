function numberOfPairs(gloves) {
    // FIRST SOLUTION
    const obj = {};
    gloves.forEach(glove => {
        if (obj[glove]) {
            obj[glove] += 1;
        } else {
            obj[glove] = 1;
        }
    })
    return Object.values(obj).map(el => {
        return Math.floor(el / 2);
    }).reduce((acc, curr) => acc + curr, 0);

    // SECOND SOLUTION
    // const uniques = new Set(gloves);
    // let amount = 0;
    // for (let unique of uniques) {
    //     const count = Math.floor(gloves.filter((pair) => pair === unique).length / 2);
    //     amount += count;
    // }
    // return amount;
}

const result = numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']);
console.log(result);