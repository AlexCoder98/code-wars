function cleanString(str) {
    const strAsArray = str.split("");
    let hashCount = 0;
    for (let i = strAsArray.length - 1; i >= 0; i--) {
        if (strAsArray[i] === "#") {
            hashCount++;
        }
        if (hashCount > 0 && strAsArray[i] !== "#") {
            strAsArray.splice(i, 1);
            hashCount--;
        };
    }
    return strAsArray.filter(el => el !== "#").join("");
}

const result = cleanString("abc#d##c");
// console.log(result);