function groupByCommas(n) {
    const arrReversed = n.toString().split('').reverse();
    let res = [];
    for (let i = 0; i < arrReversed.length; i++) {
        res.unshift(arrReversed[i]);
        if (arrReversed.length > 3 && i !== arrReversed.length - 1 && i > 0 && (i + 1) % 3 === 0) res.unshift(',');
    }
    return res.join('');
}

const result = groupByCommas(35235235);
// const result = groupByCommas(1000);
// const result = groupByCommas(100000);
// const result = groupByCommas(1);
console.log(result);