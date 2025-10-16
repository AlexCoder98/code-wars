function partsSums(ls) {
    const firstSum = ls.length > 0 ? ls.reduce((acc, curr) => acc + curr) : 0;
    const result = [firstSum];
    let subtractionNumber = 0;
    for (let i = 0; i < ls.length; i++) {
        subtractionNumber += ls[i];
        let difference = firstSum - subtractionNumber;
        result.push(difference);
    }
    return result;
}

const result = partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]);
// console.log(result);