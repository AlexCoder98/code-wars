function wave(str) {
    // FIRST SOLUTION
    // if (str.length == 0) return [];
    // let i = 0;
    // let wave = [];
    // while (i < str.length) {
    //     if (str[i] != " ") {
    //         let start = str.substring(0, i);
    //         let mid = str[i].toUpperCase();
    //         let end = str.substring(i + 1, str.length);
    //         let newString = `${start}${mid}${end}`;
    //         wave.push(newString);
    //     }
    //     i++;
    // }
    // return wave;

    // SECOND SOLUTION
    const waves = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            let newStr = `${str.slice(0, i)}${str[i].toUpperCase()}${str.slice(i + 1)}`;
            waves.push(newStr);
        }
    }
    return str.length == 0 ? [] : waves;
}

// const result = wave("hello");
const result = wave("two words");
// const result = wave("");
// const result = wave(" gap ");
console.log(result);
