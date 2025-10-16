function solution(str) {
    const arr = [];
    for (let i = 0; i < str.length; i += 2) {
        let substring = str.slice(i, i + 2);
        if (substring.length == 1) substring += "_";
        arr.push(substring);
    }
    return arr;
}

const result = solution("abcedf");
console.log(result);