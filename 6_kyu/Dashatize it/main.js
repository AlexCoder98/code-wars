function dashatize(num) {
    // FIRST SOLUTION
    if (Number.isNaN(num)) return "NaN";
    const str = Math.abs(num).toString().split("").map((el, i, arr) => (+el % 2 !== 0) ? ((arr[i - 1] % 2 == 0 || arr[i + 1] % 2 == 0) ? `-${el}-` : `-${el}`) : el).join("");
    return str.split("").filter((el, i, arr) => ((i == 0 && el == "-") || (i == arr.length - 1 && el == "-")) ? "" : el);

    // SECOND SOLUTION
    // return Math.abs(num).toString().split(/([13579])/g).filter(Boolean).join('-');
}

// const result = dashatize(5311);
// const result = dashatize(274);
// const result = dashatize(NaN);
const result = dashatize(-28369);
console.log(result);