function uniqueInOrder(iterable) {
    return (Array.isArray(iterable) ? iterable : iterable.split("")).filter((el, index, arr) => el !== arr[index + 1]);
}

const result = uniqueInOrder("AAAABBBCCDAABBB");
console.log(result);