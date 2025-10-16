function disemvowel(str) {
    return str.replaceAll(/[aioueAIOUE]/g, "");
}

const result = disemvowel("No offense but,\nYour writing is among the worst I've ever read");
console.log(result);