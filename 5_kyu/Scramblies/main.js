function scramble(str1, str2) {
    const obj1 = {};
    str1.split("").forEach(el => obj1[el] ? obj1[el] += 1 : obj1[el] = 1);
    const obj2 = {};
    str2.split("").forEach(el => obj2[el] ? obj2[el] += 1 : obj2[el] = 1);
    let count = 0;
    for (let [key, value] of Object.entries(obj2)) {
        if (key in obj1) {
            if (value <= obj1[key]) {
                count++;
            }
        }
    }
    return count == Object.keys(obj2).length ? true : false;
}
const result = scramble('cedewaraaossoqqyt', 'codewars');
console.log(result);