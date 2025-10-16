function sortOdd(arr) {
    const oddNumbers = arr.filter(el => el % 2 != 0).sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arr[i] = oddNumbers[count];
            count++;
        }
    }
    return arr;
}

const result = sortOdd([
    -43, -46, -39, -50, 34,
    8, -34, -13, -42, -50,
    -14, 33, 7, 3
]);
console.log(result.toString() === [-43, -46, -39, -50, 34, 8, -34, -13, -42, -50, -14, 3, 7, 33].toString());