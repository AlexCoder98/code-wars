function inArray(array1, array2) {
    return array1.filter(el => array2.find(innerEl => innerEl.includes(el))).sort();
}

const result = inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);
// console.log(result);