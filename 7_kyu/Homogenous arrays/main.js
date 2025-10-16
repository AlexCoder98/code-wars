function filterHomogenous(arrays) {
    // FIRST SOLUTION
    return arrays.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));

    // SECOND SOLUTION
    // return arrays.filter(subArray => {
    //     if (subArray.length) {
    //         for (let i = 0; i < subArray.length; i++) {
    //             let count = 0;
    //             for (let j = 0; j < subArray.length; j++) {
    //                 if (typeof subArray[i] != typeof subArray[j]) {
    //                     count++;
    //                 }
    //             }
    //             if (count == 0) {
    //                 return subArray;
    //             }
    //         }
    //     }
    // })
}

// const result = filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]);
const result = filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]);
console.log(result);

// console.log(typeof '' === typeof 'abc')