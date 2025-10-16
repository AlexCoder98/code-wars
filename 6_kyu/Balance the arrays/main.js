function balance(...args) {
    const mapped = args.map(arg => {
        const uniqueValues = [...new Set(arg.sort())];
        return uniqueValues.map(val => {
            let count = 0;
            for (let i = 0; i < arg.length; i++) {
                if (val === arg[i]) count++;
            }
            return count;
        }).sort();
    });

    if (mapped[0].length !== mapped[1].length) return false;
    for (let i = 0; i < mapped[0].length; i++) {
        if (mapped[0][i] !== mapped[1][i]) return false;
    }
    return true;
}

// const result = balance(array1, array2);
// console.log(result);
