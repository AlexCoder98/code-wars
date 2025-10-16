function selReverse(array, length) {
    // FIRST SOLUTION
    // if (length > 0) {
    //     const result = [];
    //     while (array.length > 0) {
    //         const innerArr = [];
    //         for (let i = 0; i < length; i++) {
    //             const el = array.shift();
    //             innerArr.push(el);
    //         }
    //         const reversed = innerArr.reverse();
    //         if (innerArr.includes(undefined)) {
    //             result.push(reversed.filter(el => el != undefined));
    //         } else {
    //             result.push(reversed);
    //         }
    //     }
    //     return result.flat();
    // }
    // return array;

    // SECOND SOLUTION
    if (length == 0) return array;
    let result = [];
    for (let i = 0; i < array.length; i += length) {
        result.push(...array.slice(i, i + length).reverse());
    }
    return result;
}

const result = selReverse([1, 2, 3, 4, 5, 6], 2);
console.log(result);