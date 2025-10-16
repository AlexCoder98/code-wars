function solve(s) {
    const uniqueValues = [...new Set(s.split(''))];
    const strAsArray = s.split('');
    for (let i = 0; i < uniqueValues.length; i++) {
        const uniqueValueIndex = strAsArray.findIndex(char => char === uniqueValues[i]);
        const copy = [...strAsArray];
        copy.splice(uniqueValueIndex, 1);
        const obj = {};
        for (let j = 0; j < copy.length; j++) {
            if (obj[copy[j]]) {
                obj[copy[j]] += 1;
            } else {
                obj[copy[j]] = 1;
            }
        }
        const objValues = Object.values(obj);
        if ([...new Set(objValues)].length == 1) return true;
    }
    return false;
};

// const result = solve('abcde');
const result = solve('abba');
console.log(result);