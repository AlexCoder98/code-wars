function camelCaseMethod(str) {
    return str.length == 0 ? "" : str.split(" ").map(el => `${el[0].toUpperCase()}${el.substring(1)}`).join("");
}

const result = camelCaseMethod("say hello");
console.log(result);