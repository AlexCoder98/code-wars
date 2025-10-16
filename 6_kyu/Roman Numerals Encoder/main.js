function solution(number) {
    const symbols = [['V', 'I', 'X'], ['L', 'X', 'C'], ['D', 'C', 'M'], ['M']];
    const numParsed = number.toString().split('').map((num, i, arr) => num === '0' ? '' : `${num}${'0'.repeat(arr.length - 1 - i)}`).filter(el => el != '').reverse();
    let encoded = '';
    for (let i = numParsed.length - 1; i >= 0; i--) {
        const currEl = numParsed[i];
        const arrPosition = numParsed[i].length - 1;
        if (currEl.length === 4) {
            encoded += symbols[arrPosition][0].repeat(currEl[0]);
        } else {
            if (+currEl[0] > 5) {
                encoded += +currEl[0] < 9 ? `${symbols[arrPosition][0]}${symbols[arrPosition][1].repeat(+currEl[0] - 5)}` : `${symbols[arrPosition][1]}${symbols[arrPosition][2]}`;
            }
            if (+currEl[0] < 5) {
                encoded += +currEl[0] < 4 ? `${symbols[arrPosition][1].repeat(+currEl[0])}` : `${symbols[arrPosition][1]}${symbols[arrPosition][0]}`;
            }
            if (+currEl[0] === 5) encoded += symbols[arrPosition][0];
        }
    }
    return encoded;
}

const result = solution(1990);
// const result = solution(5);
// const result = solution(2007);
console.log(result);