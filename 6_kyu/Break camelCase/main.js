function breakCamelCase(str) {
    return str.split(/([A-Z]+[a-z]+)/).filter(el => el != "").join(" ");
}

const result = breakCamelCase("camelCasingTest");
// const result = breakCamelCase("");
console.log(result);