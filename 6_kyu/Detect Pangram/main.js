function isPangram(str) {
    return [...new Set(str.toLowerCase().split("").filter(el => el.match(/[a-z]/)))].length == 26 ? true : false;
}

// const result = isPangram("The quick brown fox jumps over the lazy dog.");
const result = isPangram("This is not a pangram.");
console.log(result);