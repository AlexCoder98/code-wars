// FIRST SOLUTION
function rot13(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let rot13Str = '';
    for (let i = 0; i < message.length; i++) {
        if (message[i].match(/[a-zA-Z]/)) {
            const charIndex = alphabet.indexOf(message[i].toLowerCase());
            let newCharIndex = charIndex + 13;
            if (newCharIndex > alphabet.length - 1) {
                const diff = newCharIndex - alphabet.length;
                newCharIndex = diff;
            }
            rot13Str += message[i].match(/[A-Z]/) ? alphabet[newCharIndex].toUpperCase() : alphabet[newCharIndex];
        } else {
            rot13Str += message[i];
        }
    }
    return rot13Str;
};

// SECOND SOLUTION
// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

// const result = rot13('test');
// const result = rot13('TE3?ST');
const result = rot13('Test');
console.log(result);