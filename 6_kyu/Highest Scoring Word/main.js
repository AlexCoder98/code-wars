function highestScoringWord(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const index = str.split(" ").map(arr => arr.split("").map(el => alphabet.indexOf(el)).map(el => el + 1).reduce((acc, curr) => acc + curr)).findIndex((el, _, arr) => el == Math.max(...arr));
    return str.split(" ")[index];
}

const result = highestScoringWord("what time are we climbing up the volcano");
console.log(result);