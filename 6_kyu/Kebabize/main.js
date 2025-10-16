function kebabize(str) {
    // First solution
    return str.replace(/\d/g, "").replace(/[A-Z]/g, (el, i) => i == 0 ? el.toLowerCase() : "-" + el.toLowerCase());
    // Second solution
    // return str.split("").map((char, index) => char.match(/[^0-9]/) ? char.match(/[A-Z]/) ? (index == 0 ? char.toLowerCase() : `-${char.toLowerCase()}`) : char : "").join("");
}

const result = kebabize("AbstractSingletonProxyFactoryBean");
console.log(result);