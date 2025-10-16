function arrange(s) {
    if (s.length <= 2) {
        return s;
    } else {
        let result = [];
        let isReversed = false;
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            const first = !isReversed ? s[i] : s[s.length - 1 - i];
            const last = !isReversed ? s[s.length - 1 - i] : s[i];
            result.push(first, last);
            isReversed = !isReversed;
        }
        if ((s.length % 2) !== 0) {
            const midIndex = s.slice(Math.floor(s.length / 2), Math.abs(s.length / 2 + 1))[0]
            result.push(midIndex);
        }
        return result;
    }
}

const result = arrange([2, 4, 3, 4, 9]);
console.log(result);

