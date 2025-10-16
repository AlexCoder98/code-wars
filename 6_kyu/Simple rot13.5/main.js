function ROT135(input) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // ENCODE SECTION
    let rot13Str = '';
    for (let i = 0; i < input.length; i++) {
        const inputEl = input[i]
        if (inputEl.match(/[a-zA-Z]/)) {
            const charIndex = alphabet.indexOf(inputEl.toLowerCase());
            let newCharIndex = charIndex + 13;
            if (newCharIndex > alphabet.length - 1) {
                const diff = newCharIndex - alphabet.length;
                newCharIndex = diff;
            }
            rot13Str += inputEl.match(/[A-Z]/) ? alphabet[newCharIndex].toUpperCase() : alphabet[newCharIndex];
        } else if (inputEl.match(/[0-9]/)) {
            let newDigit = +inputEl + 5;
            if (newDigit >= 10) {
                let diff = newDigit - 10;
                newDigit = newDigit === 10 ? 0 : diff;
            }
            rot13Str += newDigit.toString();
        } else {
            rot13Str += inputEl;
        }
    }
    return rot13Str;

    // DECODE SECTION
    // let resROT13Str = '';
    // for (let i = 0; i < rot13Str.length; i++) {
    //     const inputEl = rot13Str[i];
    //     if (inputEl.match(/[a-zA-Z]/)) {
    //         const charIndex = alphabet.indexOf(inputEl.toLowerCase());
    //         let newCharIndex = charIndex - 13;
    //         if (newCharIndex < 0) {
    //             const diff = alphabet.length + newCharIndex;
    //             newCharIndex = diff;
    //         }
    //         resROT13Str += inputEl.match(/[A-Z]/) ? alphabet[newCharIndex].toUpperCase() : alphabet[newCharIndex];
    //     } else if (inputEl.match(/[0-9]/)) {
    //         let newDigit = +inputEl - 5;
    //         if (newDigit < 0) {
    //             const diff = 10 + newDigit;
    //             newDigit = diff;
    //         }
    //         resROT13Str += newDigit.toString();
    //     } else {
    //         resROT13Str += inputEl;
    //     }
    // }
    // return resROT13Str;
}

const result = ROT135('The quick brown fox jumps over the 2 lazy dogs');
// const result = ROT135('6789012345');
console.log(result);
