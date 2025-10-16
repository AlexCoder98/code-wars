var decodeBits = function (bits) {
    const electricalTelegraphCodes = { '1': '.', '0': '', '111': '-', '000': ' ', '0000000': '   ' };
    const parts = [];
    for (let i = bits.startsWith('0') ? bits.indexOf('1') : 0; i < bits.length; i++) {
        let part = bits[i];
        for (let j = 1 + i; j < bits.length; j++) {
            if (bits[i] === bits[j]) {
                part += bits[j];
            } else {
                break;
            }
        }
        i += part.length - 1;
        if (part != '') parts.push(part);
    }
    const filtered = parts[parts.length - 1].includes('0') ? parts.slice(0, parts.lastIndexOf(parts.find(el => el.includes('1'))) + 1) : parts;
    const elLengthArr = [...new Set(filtered.map(el => el.length))].sort((a, b) => a - b);
    const mapped = filtered.map(el => el.substring(0, el.length / elLengthArr[0]));
    const words = mapped.join('').split(/(0000000)/).map(el => !el.match(/(0000000)/) ? el.split(/(000)/) : el).reduce((acc, el) => acc.concat(el), []).map(el => !el.match(/(0000000)/) && !el.match(/(000)/) ? el.split(/(0)/) : el)

    let newMorseCode = [];
    for (let i = 0; i < words.length; i++) {
        let morseCodeUnit;
        if (words.some(word => typeof word === 'string')) {
            if (typeof words[i] === 'string') {
                morseCodeUnit = electricalTelegraphCodes[words[i]];
            }
            if (typeof words[i] === 'object') {
                morseCodeUnit = words[i].map(char => electricalTelegraphCodes[char]).join('');
            }
        } else {
            morseCodeUnit = words[i].map(word => [electricalTelegraphCodes[word]]);
        }
        newMorseCode.push(morseCodeUnit);
    }

    return newMorseCode;
}

var decodeMorse = function (morseCode) {
    if (morseCode.every(el => typeof el === 'string')) {
        return morseCode.map(code => {
            if (typeof code === 'string') {
                return MORSE_CODE[code] ? MORSE_CODE[code] : (code === '   ' ? ' ' : '');
            }
        }).join('').trim();
    }
    if (morseCode.some(el => typeof el === 'object')) {
        return MORSE_CODE[morseCode[0].join('')];
    }
}

const result = decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));
// const result = decodeMorse(decodeBits('10001'));
// const result = decodeMorse(decodeBits('10111'));
console.log(result);