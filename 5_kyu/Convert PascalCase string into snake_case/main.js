function toUnderscore(string) {
    if (typeof string != "string") return string + "";
    const words = [];
    let isFirstWordAdded = false, firstWord = "";
    for (let i = 0; i < string.length; i++) {
        if (!isFirstWordAdded && !string[i].match(/[A-Z]/)) {
            firstWord += string[i];
        }
        if (string[i].match(/[A-Z]/)) {
            isFirstWordAdded = true;
            if (firstWord != "") {
                words.push(firstWord);
            }
            let word = string[i].toLowerCase();
            for (let j = i + 1; j < string.length; j++) {
                if (string[j].match(/[A-Z]/)) break;
                word += string[j];
            }
            words.push(word);
        }
    }
    return words.length > 0 ? words.join("_") : string;
}

// const result = toUnderscore("MoviesAndBooks");
// console.log(result);