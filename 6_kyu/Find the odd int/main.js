function findOdd(arr) {
    // FIRST SOLUTION
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return +Object.entries(obj).filter(el => el[1] % 2 != 0)[0][0];

    // SECOND SOLUTION
    // return arr.find((num) => arr.filter(el => el == num).length % 2);
}

const result = findOdd([0, 0, 0, 1, 1]);
console.log(result);