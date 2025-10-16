function longestPalindrome(s) {
    if (s.length == 0) return 0;
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            const subStr = s.substr(i, j + 1);
            const subStrReversed = s.substr(i, j + 1).split("").reverse().join("");
            if (subStr === subStrReversed) arr.push(subStr);
        }
    }
    return arr.filter(el => el != "").sort((a, b) => b.length - a.length)[0].length;
}

// const result = longestPalindrome("BaaBcd");
const result = longestPalindrome("baablkj12345432133d");
// const result = longestPalindrome("a");
// console.log(result);