const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function playPass(s, n) {
    return s.split('').reduce((acc, curr, index) => {
        if (curr.match(/[^\d\W]/)) {
            const letterIndex = letters.findIndex(letter => letter === curr.toUpperCase());
            let newIndex = letterIndex + n;

            if (newIndex < letters.length) {
                curr = letters[newIndex];
            } else {
                newIndex = newIndex - letters.length;
                curr = letters[newIndex];
            }

            curr = index % 2 === 0 ? curr.toUpperCase() : curr.toLowerCase();
        }

        if (curr.match(/\d/)) {
            curr = 9 - curr;
        }

        acc.push(curr);

        return acc;
    }, []).reverse().join("");
};