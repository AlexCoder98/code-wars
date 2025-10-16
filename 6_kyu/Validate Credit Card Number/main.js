function validate(n) {
    return n.toString().split('').reverse().map((el, i) => {
        if (i % 2 != 0) {
            const doubled = (el * 2).toString();
            return doubled.length > 1 ? doubled.split('').reduce((acc, curr) => acc + +curr, 0) : +doubled;
        }
        return +el;
    }).reduce((acc, curr) => acc + curr) % 10 === 0;
}

const result = validate(123);
console.log(result);