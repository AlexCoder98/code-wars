function sortByStringLength(array) {
    return array.sort((a, b) => a.length - b.length);
}

const result = sortByStringLength(["", "Moderately", "Brains", "Pizza"]);
console.log(result);