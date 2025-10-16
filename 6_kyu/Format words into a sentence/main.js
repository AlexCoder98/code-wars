function formatWords(words) {
    return Array.isArray(words) ? words.filter(el => el != "").map((word, index, arr) => {
        if (index != 0 && index != arr.length - 1) return `, ${word}`;
        if (index === arr.length - 1 && arr.length > 1) return ` and ${word}`;
        if (index === 0) return `${word}`;
        return "";
    }).join("") : "";
}

// const result = formatWords(['one', 'two', 'three', 'four']);
// const result = formatWords(['one']);
const result = formatWords(null);
console.log(result);