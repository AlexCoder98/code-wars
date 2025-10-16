function isAlt(word) {
    const regexp = /a|o|i|e|u/;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        count += word[0].match(regexp) ? (word[i].match(regexp) ? 1 : -1) : word[i].match(regexp) ? -1 : 1;
        if (count === -1 || count >= 2) return false;
    }
    return true;
}

// const result = isAlt('amazon');
// const result = isAlt('banana');
const result = isAlt('apple');
console.log(result);