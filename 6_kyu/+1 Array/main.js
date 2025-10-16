function upArray(arr) {
    if (arr.some(el => el < 0 || el > 9) || arr.length == 0) return null;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            arr[i] = arr[i] + 1;
        }
        if (arr[i] > 9) {
            arr[i] = 0;
            if (arr.length > 1) {
                arr[i - 1] = arr[i - 1] + 1;
            }
            if (i == 0) {
                arr.unshift(1);
            }
        }
    }
    return arr.filter(_ => !Number.isNaN());
}
// const result = upArray([4, 3, 2, 5]);
const result = upArray([9, 9, 9, 9]);
// const result = upArray([0, 8, 3]);
// const result = upArray([9]);
// const result = upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);