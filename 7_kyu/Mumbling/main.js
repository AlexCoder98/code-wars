function mumbling(string) {
    return string.split("").map((el, index) => el.repeat(index + 1)).map(el => el.length > 1 ? `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}` : `${el.toUpperCase()}`).join("-");
}

const result = mumbling('ZpglnRxqenU');
console.log(result);
console.log(result === "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");