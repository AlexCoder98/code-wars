function validBraces(braces) {
    const bracesType = { '(': ')', '[': ']', '{': '}' };
    const res = [];
    for (let i = 0; i < braces.length; i++) {
        if (bracesType.hasOwnProperty(braces[i])) {
            res.push(braces[i]);
        } else if (bracesType[res.pop()] !== braces[i]) {
            return false;
        }
    }
    return res.length === 0;
}

// const result = validBraces('(({{[[]]}}))');
const result = validBraces('(){}[]');
console.log(result);