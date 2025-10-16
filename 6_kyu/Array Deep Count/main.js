function deepCount(a) {
    // FIRST SOLUTION
    let count = 0;
    const flatArr = (arg) => {
        arg.forEach(el => {
            count++;
            if (Array.isArray(el)) {
                el.flat();
                flatArr(el);
            }
        });
    }
    flatArr(a);
    return count;

    // SECOND SOLUTION
    // return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}


const result = deepCount([1, 2, [3, 4, [5]]]);
// const result = deepCount([[[[[[[[[]]]]]]]]]);
console.log(result);