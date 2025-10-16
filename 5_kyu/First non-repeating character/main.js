function firstNonRepeatingLetter(s) {
    const lowered = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        let count = 0;
        for (let j = 0; j < lowered.length; j++) {
            if (s[i] === s[j] || s[i] === s[j].toUpperCase() || s[i].toUpperCase() === s[j]) count++;
        }
        if (count == 1) return s[i];
    }
    return "";
}

const result = firstNonRepeatingLetter("sTreSS");
console.log(result);