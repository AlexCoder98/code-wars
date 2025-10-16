function findUniq(arr) {
    const lowered = arr.map(el => el.toLowerCase());
    const uniqueValuesInOneArray = lowered.map(el => [...new Set(el.split(""))]).flat();
    const valuesCount = {};
    uniqueValuesInOneArray.forEach(el => valuesCount[el] ? valuesCount[el] += 1 : valuesCount[el] = 1);
    const uniqueLetter = Object.entries(valuesCount).find(el => el[1] == 1)[0];
    return arr.find(el => el.includes(uniqueLetter) ? el : el.includes(uniqueLetter.toUpperCase()));
}

const result = findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']);
// console.log(result);