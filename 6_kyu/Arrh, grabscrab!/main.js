function grabscrab(anagram, dictionary) {
    return dictionary.filter(item => {
        let anagramCopy = anagram, newString = "";
        for (let j = 0; j < item.length; j++) {
            if (anagramCopy.includes(item[j])) {
                newString += item[j];
                anagramCopy = anagramCopy.replace(item[j], "");
            };
        }
        if (newString === item) return newString;
    });
}

const result = grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]);
// console.log(result);