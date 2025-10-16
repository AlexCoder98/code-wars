function shiftedDiff(first, second) {
    if (first === second) return 0;
    const firstLetterIndex = first.indexOf(second[0]);
    if (firstLetterIndex != -1) {
        const secondPart = first.slice(0, firstLetterIndex), firstPart = first.slice(firstLetterIndex);
        return `${firstPart}${secondPart}` === second ? firstPart.length : -1;
    } else {
        return -1;
    }
}

const result = shiftedDiff("eecoff", "coffee");
// console.log(result);