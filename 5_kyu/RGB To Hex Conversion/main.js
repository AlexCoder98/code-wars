function rgb(r, g, b) {
    const hexConversionData = { "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F" };
    const correctRGBArray = [...arguments].map(el => (el > 255) ? 255 : (el < 0 ? 0 : el));
    let hexColorArray = [];

    correctRGBArray.forEach(el => {
        for (let i = el; i >= 0; i--) {
            const number = i / 16;
            if (Number.isInteger(number)) {
                hexColorArray.push(number, el - i);
                break;
            }
        }
    })
    return `${hexColorArray.map(el => el.toString().replace(el, hexConversionData[el])).join("")}`;
}

const result = rgb(173, 255, 47);
// console.log(result);