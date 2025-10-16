function isValidIP(str) {
    const regex = /\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/;
    return str.split(".").filter(el => el.match(regex) && !el.match(/[-!?\s]/) && (el.length > 1 ? !el.startsWith("0") : el)).length == 4;
}

// const result = isValidIP("123.45.67.89");
console.log(result);