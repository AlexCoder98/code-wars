function reverseWords(str) {
    return str.split(" ").map(el => el.split("").reverse().join("")).join(" ");
}

const result = reverseWords('The quick brown fox jumps over the lazy dog.');
console.log(result);