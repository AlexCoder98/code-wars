function deleteNth(arr, n) {
    // FIRST SOLUTION
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = newArr.filter(el => el == arr[i]);
        if (tempArr.length < n) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

    // SECOND SOLUTION
    // const obj = {}
    // return arr.filter(number => {
    //     obj[number] = obj[number] ? obj[number] + 1 : 1;
    //     return obj[number] <= n;
    // })
}

const result = deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
// const result = deleteNth([20, 37, 20, 21], 1);
console.log(result);