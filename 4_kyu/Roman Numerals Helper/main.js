class RomanNumerals {
    static toRoman(number) {
        const symbols = [['V', 'I', 'X'], ['L', 'X', 'C'], ['D', 'C', 'M'], ['M']];
        const numParsed = number.toString().split('').map((num, i, arr) => num === '0' ? '' : `${num}${'0'.repeat(arr.length - 1 - i)}`).filter(el => el != '').reverse();
        let encodedNum = '';
        for (let i = numParsed.length - 1; i >= 0; i--) {
            const currEl = numParsed[i];
            const arrPosition = numParsed[i].length - 1;
            if (currEl.length === 4) {
                encodedNum += symbols[arrPosition][0].repeat(currEl[0]);
            } else {
                if (+currEl[0] > 5) {
                    encodedNum += +currEl[0] < 9 ? `${symbols[arrPosition][0]}${symbols[arrPosition][1].repeat(+currEl[0] - 5)}` : `${symbols[arrPosition][1]}${symbols[arrPosition][2]}`;
                }
                if (+currEl[0] < 5) {
                    encodedNum += +currEl[0] < 4 ? `${symbols[arrPosition][1].repeat(+currEl[0])}` : `${symbols[arrPosition][1]}${symbols[arrPosition][0]}`;
                }
                if (+currEl[0] === 5) encodedNum += symbols[arrPosition][0];
            }
        }
        return encodedNum;
    }

    static fromRoman(roman) {
        const romanValues = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
        return roman.split("").map(el => romanValues[el]).reduce((acc, curr, i, arr) => curr < arr[i + 1] ? acc - curr : acc + curr, 0);
    }
}

console.log(new RomanNumerals().fromRoman('MDCLXVI'));
console.log('MDCLXVI');