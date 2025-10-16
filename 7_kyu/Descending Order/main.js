function descendingOrder(number) {
    return +number.toString().split("").sort((a, b) => b - a).join("");
}

const result = descendingOrder(123456789);
console.log(result);