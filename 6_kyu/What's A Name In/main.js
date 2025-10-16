function nameInStr(str, name) {
    let count = 0;
    let newStr = "";
    for (const char of str.toLowerCase()) {
        if (char == name.toLowerCase()[count]) {
            newStr += char;
            count++;
        }
    }
    return newStr == name.toLowerCase();
}

const result = nameInStr('Across the rivers', 'chris');
// console.log(result);