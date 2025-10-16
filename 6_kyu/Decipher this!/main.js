function decipherThis(str) {
    return str.split(" ").map(el => {
        const strStart = String.fromCharCode(el.match(/\d/g).join(""));
        const strEnd = el.split(" ").map(el => el.replace(/\d/g, "").split("").map((innerEl, index, arr) => index == 0 ? arr[arr.length - 1] : (index == arr.length - 1 ? arr[0] : innerEl)).join(""));
        return `${strStart}${strEnd}`;
    }).join(" ");
}

const result = decipherThis('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri');
// console.log(result);