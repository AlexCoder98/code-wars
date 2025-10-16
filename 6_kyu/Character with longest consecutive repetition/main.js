function longestRepetition(s) {
    if (s.length == 0) return ["", 0];
    const resultArr = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i], s[i - 1]);
        if (s[i] != s[i - 1]) {
            const innerArr = [];
            innerArr.push(s[i]);
            let count = 0;
            for (let j = i; j < s.length; j++) {
                count++;
                if (s[j + 1] != s[j]) {
                    break;
                }
            }
            innerArr.push(count);
            resultArr.push(innerArr);
        }
    }
    return resultArr.sort((a, b) => b[1] - a[1])[0];
}

// const result = longestRepetition("bbbaaabaaaa");
// const result = longestRepetition("");
const result = longestRepetition("aabb");
console.log(result);