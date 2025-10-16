function stringTransformer(str) {
    return str.split(" ").reverse().map(el => el.split("").map(el => el.match(/[a-z]/) ? el.toUpperCase() : el.toLowerCase()).join("")).join(" ");
}

const result = stringTransformer("Example string");
console.log(result);