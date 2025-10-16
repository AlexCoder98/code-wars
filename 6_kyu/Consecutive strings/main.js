function longestConsec(strArr, k) {
    if (strArr.length == 0 || k <= 0 || k > strArr.length) return "";
    const newArr = [];
    for (let i = 0; i < strArr.length; i++) {
        let consecString = "";
        for (let j = 0; j < k; j++) {
            consecString = consecString + (strArr[i + j] == undefined ? "" : strArr[i + j]);
        }
        newArr.push(consecString);
    }
    return newArr.sort((a, b) => b.length - a.length)[0];
}

const result = longestConsec([], 3);
console.log(result);