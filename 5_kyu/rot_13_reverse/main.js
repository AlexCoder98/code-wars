function rot13(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let rot13Str = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-Z]/)) {
            const charIndex = alphabet.indexOf(str[i].toLowerCase());
            let newCharIndex = charIndex - 13;
            if (newCharIndex < 0) {
                const diff = alphabet.length + newCharIndex;
                newCharIndex = diff;
            }
            rot13Str += str[i].match(/[A-Z]/) ? alphabet[newCharIndex].toUpperCase() : alphabet[newCharIndex];
        } else {
            rot13Str += str[i];
        }
    }
    return rot13Str;
};

// const result = rot13('EBG13 rknzcyr.');
const result = rot13('This is my first ROT13 excercise!');
console.log(result);
console.log(result === 'Guvf vf zl svefg EBG13 rkprepvfr!');