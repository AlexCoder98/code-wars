function duplicateCount(str) {
    const arr = str.toLowerCase().split("");
    return [...new Set(arr.filter((el) => arr.indexOf(el) !== arr.lastIndexOf(el)))].length;
}

const result = duplicateCount("");
console.log(result);